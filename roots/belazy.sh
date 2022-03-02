#!/bin/bash

# Things needed to make this work locally
. ~/.local/helpers/python_helpers.sh

. ~/.local/helpers/iot4_helpers.sh

die(){
	local m="$1"  # the first arg
	local e=$2    # the second arg
	echo "$m"
	exit $e
}

# if not enough args displayed, display an error and die
[ $# -eq 0 ] && die "Usage: $0 lazy|liquid" 1

DIR=$(git rev-parse --show-toplevel)

if [ $1 = "lazy" ];
then
    cd $DIR/roots/lazy/ && make push

    if [ $AWS_PROFILE = "iot4" ];
    then
        rm -rf $DIR/roots/lazy/node_modules
        aws s3 sync $DIR/roots/lazy/ s3://iot4-group

        become finance

        aws s3 sync $DIR/roots/lazy/ s3://finance.iot4.net
        none
        iot
        become backup
        aws s3 sync $DIR/roots/lazy/ s3://backup.iot4.net

        cd $DIR/roots/aws/backup/us-east-1/terraform
        terraform apply --auto-approve

        cd $DIR/roots/aws/backup/us-west-2/terraform
        terraform apply --auto-approve

        export ANSIBLE_HOST_KEY_CHECKING=False

        activate workbench

        ansible-playbook $DIR/roots/aws/backup/global/ansible/main.yml -i $DIR/roots/aws/backup/global/ansible/hosts
    fi
fi
