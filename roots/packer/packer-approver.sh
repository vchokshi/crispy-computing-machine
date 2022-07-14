#!/bin/bash

#Usage: bash scripts/packer-approver.sh

# Requires: AWS credentials
# Depends on: current branch matches AMI tag in AWS

set -eux

IMAGE_FILTER="$(git branch --show-current)"

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
		PAYLOAD="{\"imageId\":\"$ami\",\"region\":\"$r\"}"
		res=$(aws lambda invoke \
			--region us-east-1 \
                	--function-name ami_share \
                	--invocation-type Event \
                	--cli-binary-format raw-in-base64-out \
			--payload $PAYLOAD \
			response.json)
	fi
done

echo "Successfully approved and shared AMIs"
