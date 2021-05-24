#!/bin/bash

set -eux

IMAGE_FILTER="$(git branch --show-current)"

if ! command -v aws &> /dev/null; then
    echo "aws not found. Exiting." && exit 1
fi

REGIONS=($(aws ec2 describe-regions --query 'Regions[*].[RegionName]' --output text ))

for r in ${REGIONS[@]}; do
	echo "Looking for AMI in region $r with Image Filter $IMAGE_FILTER"
	ami=$(aws ec2 describe-images --region $r\
		--filters="Name=tag:pr_branch,Values=$IMAGE_FILTER" \
		--query 'sort_by(Images,&CreationDate)[-1].[ImageId]' \
		--output text
	)
	if [ $ami != "None" ]; then
		echo "Found ami $ami"
		res=$(aws ec2 create-tags --resources $ami --region $r \
			--tags Key=approval_status,Value=approved
		)
		echo "Sharing the ami $ami"
		PAYLOAD="{'ImageId':$ami}"
		share=$(aws lambda invoke \
			--region $r \
                	--function-name ami_share \
                	--invocation-type Event \
                	--cli-binary-format raw-in-base64-out \
                	--payload \'$PAYLOAD\' \
                	response.json
		)
	fi
done
