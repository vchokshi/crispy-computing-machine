#!/bin/bash
TITLE="[DEV-001] - THis is a test PR title"
#echo `expr "$TITLE" : '^\[A-Z]{3,}-[0-9]{3,}\] - .+$'`
expr match "$TITLE" '^\[DEV-[0-9][0-9][0-9]\] - [0-9a-zA-Z].*$'
