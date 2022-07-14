#!/bin/sh

# Super Script

. ~/.bash_helpers.sh

DIR=$(git rev-parse --show-toplevel)

echo $DIR
none
iot
assume backup
cd roots/aws
sh packer/packer-builder.sh packer build

