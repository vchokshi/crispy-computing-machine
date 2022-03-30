
#!/bin/sh

DIR=$(git rev-parse --show-toplevel)

if [ $AWS_PROFILE = "backup" ];
then
    aws s3 sync $DIR/roots/liquid/dist s3://iot4-backup-liquid
fi
