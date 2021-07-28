import logging
import pprint

import boto3

logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)


pp = pprint.PrettyPrinter(indent=1)


def assume_role_client(service, region, creds):
    return boto3.client(
        service,
        region_name=region,
        aws_access_key_id=creds["AccessKeyId"],
        aws_secret_access_key=creds["SecretAccessKey"],
        aws_session_token=creds["SessionToken"],
    )


def get_s3_details(account, client):

    response = client.list_buckets()

    # for bucket in response["Buckets"]:

    # r = client.list_objects(Bucket=bucket["Name"])
    # for key in r["Contents"]:
    # if key["LastModified"] > latest:
    # latest = key["LastModified"]

    print(account, "s3:", len(response["Buckets"]))
    return len(response["Buckets"])


def set_regions():
    all_regions = get_regions(boto3.client("ec2", region_name="us-east-1"))
    supported_regions = [
        "us-west-1",
        "ap-southeast-2",
        "ca-central-1",
        "eu-central-1",
        "eu-west-1",
        "us-east-1",
        "us-west-2",
    ]
    unsupported_regions = get_unsupported_regions(all_regions, supported_regions)

    return all_regions, supported_regions, unsupported_regions


def assume_role(client, account):
    arn = "arn:aws:iam::%s:role/OrganizationAccountAccessRole" % (account)
    assumed_role = boto3.client("sts", region_name="us-east-1").assume_role(
        RoleArn=arn, RoleSessionName="vihar@nebulaworks.com"
    )

    return assumed_role["Credentials"]


def print_log_details(account, region, creds):

    params = {"logGroupNamePrefix": "cloudtrail"}

    paginator = assume_role_client("logs", region, creds).get_paginator(
        "describe_log_groups"
    )
    page_iterator = paginator.paginate(**params)

    for page in page_iterator:
        for group in page["logGroups"]:
            if group["storedBytes"]:
                print(
                    account,
                    region,
                    group["logGroupName"],
                    format_bytes(group["storedBytes"]),
                )


def get_regions(client):
    regions = []
    response = client.describe_regions()
    for region in response["Regions"]:
        regions.append(region["RegionName"])
    return regions


def format_bytes(size):
    # 2**10 = 1024
    power = 2 ** 10
    n = 0
    power_labels = {
        0: "",
        1: "kilo",
        2: "mega",
        3: "giga",
        4: "tera",
        5: "peta",
        6: "exa",
        7: "zetta",
        8: "yotta",
    }
    while size > power:
        size /= power
        n += 1
    return size, power_labels[n] + "bytes"


def get_account_details(account, client):
    response = client.describe_account(AccountId=account)["Account"]
    print(account, response["Id"], response["Name"], response["Email"])
    return response


def get_accounts_list(client):
    accounts = []
    paginator = client.get_paginator("list_accounts")
    page_iterator = paginator.paginate()
    for page in page_iterator:
        for acct in page["Accounts"]:
            accounts.append(acct["Id"])
    return accounts


def get_accounts_list_with_names(client):
    accounts = []
    paginator = client.get_paginator("list_accounts")
    page_iterator = paginator.paginate()
    for page in page_iterator:
        for acct in page["Accounts"]:
            accounts.append({acct["Name"]: acct["Id"]})
    return accounts


def get_ec2_instances_count(account, client, region):
    count = 0
    _args = {"Filters": [{"Name": "instance-state-name", "Values": ["running"]}]}
    response = client.describe_instances(**_args)
    for r in response["Reservations"]:
        for i in r["Instances"]:
            count += 1
    if count:
        print(account, region, "ec2:", count)

    return count


def get_unsupported_regions(all_regions, supported_regions):

    unsupported_regions = []
    for region in all_regions:
        if region not in supported_regions:
            unsupported_regions.append(region)

    return unsupported_regions
