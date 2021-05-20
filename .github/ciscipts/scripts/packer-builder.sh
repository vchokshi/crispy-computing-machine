#!/bin/sh

## This CI script builds packer

usage() { 
	echo "Usage: packer-builder.sh packer build [-mh] [dev|prod]"; 
	echo ""
	echo "optional arguments:"
	echo " -h		Show this help page"
	echo " -m		Enable machine readable output (default: disabled)"
	echo " [dev|prod]	Environment to build (default: prod)"
}

if [ $# -eq 0 ]; then echo "No Arguments supplied. Exiting." && usage && exit 1; fi

if [ $1 != "packer" ]; then echo "This script to be used with packer only. Exiting." && usage && exit 1; fi

MACHINE_READABLE=0

CMD="packer build "
ENV="prod"

shift 

if [ $# -eq 0 ]; then usage && exit 1; fi

while [ $# -gt 0 ]; do
	case $1 in
		-h ) 	usage && exit 0;;
		-m )  			CMD="packer build -machine-readable " && MACHINE_READABLE=1 ;;
		prod )  		ENV="prod" ;;
		*)	               ;;
	esac
	shift 
done

PR_BRANCH="pr_branch=$(git branch --show-current)"

$CMD -var $PR_BRANCH -var-file=packer/$ENV.pkrvars.hcl packer/base_amazon_linux.pkr.hcl
