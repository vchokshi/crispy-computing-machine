
#!/bin/sh

DIR=$(git rev-parse --show-toplevel)

cd $DIR/roots/lazy/ && make push

if [ $AWS_PROFILE = "iot4" ];
then
    aws s3 sync $DIR/roots/lazy/ s3://iot4-group
fi

if [ $AWS_PROFILE = "finance" ];
then
    aws s3 sync $DIR/roots/lazy/ s3://finance.iot4.net
fi

if [ $AWS_PROFILE = "backup" ];
then
    aws s3 sync $DIR/roots/lazy/ s3://backup.iot4.net
    export ANSIBLE_HOST_KEY_CHECKING=False
    ansible-playbook $DIR/roots/aws/backup/global/ansible/main.yml -i $DIR/roots/aws/backup/global/ansible/hosts
fi


if [ $AWS_PROFILE = "iot4" ];
then
    aws s3 sync $DIR/roots/lazy/ s3://iot4-group
fi


