#!/bin/sh

# Packer Builder Script
# This code needs AWS credentials setup for the AWS Backup Account in IOT4

. ~/.bash_helpers.sh

DIR=$(git rev-parse --show-toplevel)

echo $DIR
none
iot
assume backup
cd roots/aws
sh packer/packer-builder.sh packer build

