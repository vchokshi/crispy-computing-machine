#!/usr/bin/env python

import pprint
import boto3
from aws_tools import main

accounts = main.get_accounts_list_with_names(boto3.client("organizations", region_name='us-east-1'))
pprint.pprint(accounts)
