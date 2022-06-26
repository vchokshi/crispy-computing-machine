#!/bin/sh

## This CI script builds packer

usage() {
	echo "Usage: packer-builder.sh packer build [-h]";
	echo ""
	echo "Optional arguments:"
	echo " -h		Show this help page"
}

if [ $# -eq 0 ]; then echo "No Arguments supplied. Exiting." && usage && exit 1; fi

if [ $1 != "packer" ]; then echo "This script to be used with packer only. Exiting." && usage && exit 1; fi

CMD="packer build "

shift

if [ $# -eq 0 ]; then usage && exit 1; fi

while [ $# -gt 0 ]; do
	case $1 in
		-h ) 	usage && exit 0;;
		*)	               ;;
	esac
	shift
done

PR_BRANCH="pr_branch=$(git branch --show-current)"
PR_SHA="pr_sha=$(git rev-parse --short --verify HEAD)"

$CMD -var $PR_BRANCH -var $PR_SHA -var-file=packer/pkrvars.hcl packer/base_amazon_linux.pkr.hcl
