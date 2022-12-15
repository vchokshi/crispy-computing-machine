#!/bin/sh

DIR=$(git rev-parse --show-toplevel)

if [ $AWS_PROFILE = "iot4" ];
then
    aws s3 sync $DIR/websites/www/site s3://iot4-www
fi
