import os
import time
from datetime import datetime

import boto3
import botocore

from vendor import confluence, jira

from . import helpers

REGION = "us-east-1"


def main():
    print(lambda_handler({}, None))


def get_secrets(client):

    response = client.get_parameter(Name="/atlassian/site", WithDecryption=True)
    site = response["Parameter"]["Value"]

    response = client.get_parameter(Name="/atlassian/user", WithDecryption=True)
    user = response["Parameter"]["Value"]

    response = client.get_parameter(Name="/atlassian/api_token", WithDecryption=True)
    token = response["Parameter"]["Value"]

    return site, user, token


def whoami(client):
    client.get_caller_identity()


def backup(site, user, token):

    conf_url = ""
    jira_url = ""
    day = datetime.today().strftime("%A")

    # Since we don't write to disk, we don't care.
    folder = "./"

    # We always backup attachments since Atlassian is hosting the backup
    # Or maybe we dont, but the attachments are sooooo important.
    if day == "Saturday":
        print("Including Attachments in Backup")
        attachments = "Y"
    else:
        print("Attachments will not be included today!")
        attachments = "N"

    # We pass in default JSON_DATA
    if day == "Saturday":
        json_data = b'{"cbAttachments": "true", "exportToCloud": "true"}'
    else:
        json_data = b'{"cbAttachments": "false", "exportToCloud": "true"}'

    print("Backing up Confluence")
    conf_url = confluence.conf_backup(site, user, token, attachments, folder)

    print("Backing up Jira")
    jira_url = jira.jira_backup(site, user, token, json_data, folder)

    return conf_url, jira_url


def send_sns(client, message):
    try:
        sns_topic_arn = os.environ["SNS_TOPIC_ARN"]
    except:
        return False
    client.publish(
        TopicArn=sns_topic_arn,
        Message=message,
        Subject="Atlassian Backup Report",
    )
    return True


def lambda_handler(event, context):

    BUCKET = "iot4-backup-biggfiles"

    headers = {"Content-Type": "application/json"}
    message = "Starting Atlassian Backup, press CTRL+C to cancel."
    dry_run = os.getenv("DRY_RUN")

    s3_client = boto3.client("s3", region_name=REGION)

    try:
        whoami(boto3.client("sts", region_name=REGION))
    except botocore.exceptions.NoCredentialsError as e:
        send_sns(boto3.client("sns", region_name=REGION), e)
        return {"statusCode": 403, "headers": headers, "body": e}

    try:
        site, user, token = get_secrets(boto3.client("ssm", region_name=REGION))
    except botocore.exceptions.ClientError as e:
        send_sns(boto3.client("sns", region_name=REGION), e)
        return {"statusCode": 404, "headers": headers, "body": e}

    if dry_run == "True":
        message = "Mission Control: All Systems are Go. "
        send_sns(boto3.client("sns", region_name=REGION), message)
        return {"statusCode": 204, "headers": headers, "body": message}

    else:
        print(message)
        time.sleep(10)

        try:
            conf_url, jira_url = backup(site, user, token)

        except:
            message = "Failed to Backup. Please Check the Logs and Try Again."
            send_sns(boto3.client("sns", region_name=REGION), message)
            return {"statusCode": 503, "headers": headers, "body": message}

        jira_s3 = helpers.backup_to_s3("jira", BUCKET, jira_url, s3_client)
        conf_s3 = helpers.backup_to_s3("confluence", BUCKET, conf_url, s3_client)
        message = conf_s3 + jira_s3

    return message


if __name__ == "__main__":
    main()
