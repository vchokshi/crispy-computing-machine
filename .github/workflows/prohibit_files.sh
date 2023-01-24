#!/bin/sh

# Exclude Files
# This program search for disallowed files and fails on merge to master.

DIR=$(git rev-parse --show-toplevel)
RES=$(find $DIR -type f \( -iname \*.tif -o -iname \*.tiff \) | wc -l)

if [ $? -ne 0 ]; then echo "Program Failed To Complete Successfully" && exit 1; fi
if [ $RES -ne 0 ]; then echo "TIFF Files Not Allowed" && exit 1; fi
