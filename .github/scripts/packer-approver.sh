#!/bin/bash

## THis code is not used in the CI Scripts
## pass in the image filter and this will set the approval staus to approved.
## it must always be ported into .github/workflows/packer-approver.yml

set -eu

IMAGE_FILTER=$1

if ! command -v aws &> /dev/null; then
    echo "aws not found. Exiting." && exit 1
fi

REGIONS=($(aws ec2 describe-regions --query 'Regions[*].[RegionName]' --output text ))

for r in ${REGIONS[@]}; do
	ami=$(aws ec2 describe-images --region $r\
		--filters="Name=tag:pr_branch,Values=$IMAGE_FILTER" \
		--query 'sort_by(Images,&CreationDate)[-1].[ImageId]' \
		--output text
	)
	if [ $ami != "None" ]; then
		res=$(aws ec2 create-tags --resources $ami --region $r \
			--tags Key=approval_status,Value=approved
		)
	fi

done
