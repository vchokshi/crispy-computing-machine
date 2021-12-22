import os
import time

import boto3
import botocore
import requests

from vendor import confluence, jira

REGION = "us-east-1"


def main():
    print(lambda_handler())


def backup_to_elastio(url):

    headers = {"Content-Type": "application/json"}

    s = requests.Session()
    g = s.get(url, stream=True, allow_redirects=True)

    try:
        g.raise_for_status()
    except requests.exceptions.HTTPError as e:
        return {"statusCode": 404, "headers": headers, "body": e}

    # block stream to elastio target
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


def create_atlassian_backup(site, user, token):
    # Since we don't write to disk, we don't care.
    folder = "."

    # We always backup attachments since Atlassian is hosting the backup
    attachments = "Y"

    # We pass in default JSON_DATA
    json_data = b'{"cbAttachments": "true", "exportToCloud": "true"}'

    conf_url = confluence.conf_backup(site, user, token, attachments, folder)
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
        Subject="Atlassian Has Been Successfully Backed Up",
    )
    return True


def lambda_handler():

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
            conf_url, jira_url = create_atlassian_backup(site, user, token)
        except:
            e = "An unexpected error occured. Please check the logs and try again."
            return {"statusCode": 503, "headers": headers, "body": e}

        backup_to_elastio(conf_url)
        backup_to_elastio(jira_url)

        message = f"Recovery URLs attached.\n {conf_url} \n {jira_url}\n"
        send_sns(boto3.client("sts", region_name=REGION), message)

        return {"statusCode": 200, "headers": headers, "body": message}

    message = "Please Check the Account and Try Again."
    return {"statusCode": 404, "headers": headers, "body": message}


if __name__ == "__main":
    resp = main()
