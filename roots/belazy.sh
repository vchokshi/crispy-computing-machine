#!/bin/sh

# Things needed to make this work locally
. ~/.local/helpers/python_helpers.sh

DIR=$(git rev-parse --show-toplevel)

cd $DIR/roots/lazy/ && make push

if [ $AWS_PROFILE = "iot4" ];
then
    rm -rf $DIR/roots/lazy/node_modules
    aws s3 sync $DIR/roots/lazy/ s3://iot4-group
fi

if [ $AWS_PROFILE = "finance" ];
then
    rm -rf $DIR/roots/lazy/node_modules
    aws s3 sync $DIR/roots/lazy/ s3://finance.iot4.net
fi

if [ $AWS_PROFILE = "backup" ];
then
    rm -rf $DIR/roots/lazy/node_modules
    aws s3 sync $DIR/roots/lazy/ s3://backup.iot4.net
    export ANSIBLE_HOST_KEY_CHECKING=False
    activate workbench
    ansible-playbook $DIR/roots/aws/backup/global/ansible/main.yml -i $DIR/roots/aws/backup/global/ansible/hosts
fi


if [ $AWS_PROFILE = "iot4" ];
then
    aws s3 sync $DIR/roots/lazy/ s3://iot4-group
fi


