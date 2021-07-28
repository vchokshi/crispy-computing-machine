#!/usr/bin/env python

import pprint
import time
from datetime import datetime, timedelta

import boto3

from aws_tools import main

pp = pprint.PrettyPrinter(indent=1)

if __name__ == "__main__":

    all_regions, supported_regions, unsupported_regions = main.set_regions()

    # Traverse supported regions only
    regions = supported_regions

    # Use get_accounts_list to get all accounts in th org
    # accounts = get_accounts_list(boto3.client("organizations", region_name='us-east-1'))
    accounts = [
        "433153556456",  # kite
        "134655284203",  # kitebioseq
        "351340862075",  # kitesasoregon
        "298388020989",  # kitesasvirginia
        "631399058606", # AOEM
        "321105233730" # ermmtool?
    ]
    skip_accounts = []

    for account in accounts:

        if account in skip_accounts:
            continue

        # Create a set of credentials to login to the account of interest
        creds = main.assume_role(boto3.client("sts"), account)

        # Get Account Details from the parent account
        account_details = main.get_account_details(
            account, boto3.client("organizations", region_name="us-east-1")
        )

        # Get S3 details from the account
        s3_details = main.get_s3_details(account, main.assume_role_client("s3", None, creds))

        for region in regions:

            main.print_log_details(account, region, creds)

            ec2_instances = main.get_ec2_instances_count(
                    account,
                main.assume_role_client("ec2", region, creds), region
            )
