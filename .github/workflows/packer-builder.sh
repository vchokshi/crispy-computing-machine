#!/bin/sh

# Packer Builder Script
DIR=$(git rev-parse --show-toplevel)

. $DIR/helpers.sh

load_secrets
aws_assume_role backup
cd $DIR/roots
sh packer/packer-builder.sh packer build

