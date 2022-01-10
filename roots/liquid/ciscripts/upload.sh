
#!/bin/sh

DIR=$(git rev-parse --show-toplevel)

if [ $AWS_PROFILE = "finance" ];
then
    aws s3 sync $DIR/roots/liquid/dist s3://finance.iot4.net
fi

if [ $AWS_PROFILE = "backup" ];
then
    aws s3 sync $DIR/roots/liquid/dist s3://backup.iot4.net
fi
