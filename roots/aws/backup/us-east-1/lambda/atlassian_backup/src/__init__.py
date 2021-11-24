import os
import re
import time

import boto3
import botocore
import requests
from smart_open import open

REGION = "us-east-1"


def main():
    lambda_handler()


def elastio_mock(conf_url, jira_url, bucket):

    print("Mocking a vault redirect")
    headers = {"Content-Type": "application/json"}

    print(f"Working on {conf_url}")

    c = requests.Session()
    c_file = c.get(conf_url, stream=True)

    #try:
        #c_file.raise_for_status()
    #except requests.exceptions.HTTPError as e:
        #print("Something went wrong")
        #return {"statusCode": 403, "headers": headers, "body": e}

    c_url = f"s3://{bucket}/confluence_vault"
    with open(c_url, "wb") as h:
        for block in c_file.iter_content(1024):
            h.write(block)

    print(f"Working on {jira_url}")
    j = requests.Session()
    j_file = j.get(jira_url, stream=True)

    #try:
        #j_file.raise_for_status()
    #except requests.exceptions.HTTPError as e:
        #print("Something went wrong")
        #return {"statusCode": 403, "headers": headers, "body": e}

    j_url = f"s3://{bucket}/jira_vault"
    with open(j_url, "wb") as ha:
        for block in j_file.iter_content(1024):
            ha.write(block)

    return {"statusCode": 200, "headers": headers, "body": "OK"}


def get_secrets(client):

    site = client.get_parameter(Name="/atlassian/site", WithDecryption=True)[
        "Parameter"
    ]["Value"]
    user = client.get_parameter(Name="/atlassian/user", WithDecryption=True)[
        "Parameter"
    ]["Value"]
    token = client.get_parameter(Name="/atlassian/api_token", WithDecryption=True)[
        "Parameter"
    ]["Value"]
    return site, user, token


def whoami(client):
    client.get_caller_identity()


def backup(site, user, token):
    conf_url = backup_confluence(site, user, token)
    jira_url = backup_jira(site, user, token)

    return conf_url, jira_url


def send_sns(client, message):
    try:
        sns_topic_arn = os.environ["SNS_TOPIC_ARN"]
    except:
        return False
    client.publish(
        TopicArn=sns_topic_arn,
        Message=message,
        Subject="Atlassian Has Been Successfully Backed Up",
    )
    return True


def lambda_handler():

    S3_BUCKET = "iot4-backup-biggfiles"

    headers = {"Content-Type": "application/json"}

    dry_run = os.getenv("DRY_RUN")

    try:
        whoami(boto3.client("sts", region_name=REGION))
    except botocore.exceptions.NoCredentialsError as e:
        return {"statusCode": 403, "headers": headers, "body": e}
    except botocore.exceptions.ClientError as e:
        return {"statusCode": 403, "headers": headers, "body": e}

    try:
        site, user, token = get_secrets(boto3.client("ssm", region_name=REGION))
    except botocore.exceptions.ClientError as e:
        return {"statusCode": 404, "headers": headers, "body": e}

    if dry_run == "True":
        message = "Mission Control: All Systems are Go. "
        return {"statusCode": 204, "headers": headers, "body": message}

    else:

        print("Starting Atlassian Backup, press CTRL+C to cancel.")
        time.sleep(10)

        try:
            # conf_url, jira_url = backup(site, user, token)
            print("Skipping for 24 hours. Downloading old files")
            conf_url = "https://iot4-biggfiles.s3.amazonaws.com/1M"
            jira_url = "https://iot4-biggfiles.s3.amazonaws.com/1G"
        except:
            e = "An unexpected error occured. Please check the logs and try again."
            return {"statusCode": 503, "headers": headers, "body": e}

        # Backup was successful
        # Mock up an elastio vault write

        elastio_mock(conf_url, jira_url, S3_BUCKET)

        message = f"Recovery URLs attached.\n {conf_url} \n {jira_url}\n"
        send_sns(boto3.client("sts", region_name=REGION), message)

        return {"statusCode": 200, "headers": headers, "body": message}

    message = "Please Check the Account and Try Again."
    return {"statusCode": 404, "headers": headers, "body": message}


if __name__ == "__main":
    main()
