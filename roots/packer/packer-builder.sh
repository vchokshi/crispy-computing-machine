#!/bin/sh

## This CI script builds packer

usage() {
	echo "Usage: packer-builder.sh packer build [-h] [aws|azure]";
	echo ""
	echo "Optional arguments:"
	echo " -h		Show this help page"
  echo " [aws|azure] (Default: aws)"
}

if [ -z $AWS_PROFILE ];
then
  echo "Please set AWS_PROFILE" && exit
fi

DIR=$(git rev-parse --show-toplevel)

if [ $# -eq 0 ]; then echo "No Arguments supplied. Exiting." && usage && exit 1; fi

if [ $1 != "packer" ]; then echo "This script to be used with packer only. Exiting." && usage && exit 1; fi

CMD="packer build "
ENV="aws"

shift

if [ $# -eq 0 ]; then usage && exit 1; fi

while [ $# -gt 0 ]; do
	case $1 in
		-h ) 	usage && exit 0;;
    aws ) ENV="aws" ;;
    azure ) ENV="azure";;
		*)	               ;;
	esac
	shift
done

PR_BRANCH="pr_branch=$(git branch --show-current)"
PR_SHA="pr_sha=$(git rev-parse --short --verify HEAD)"

if [ $AWS_PROFILE = "backup" ];
then
  $CMD -var $PR_BRANCH -var $PR_SHA -var-file=$DIR/roots/packer/$ENV.pkvars.hcl $DIR/roots/packer/base_amazon_linux.pkr.hcl
else
  echo "Please use the backup account."
fi
