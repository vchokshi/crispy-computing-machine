import argparse
import os
import subprocess
import time

import boto3
import botocore
import requests

from vendor import confluence, jira


def protect(f):

    print(f"Protecting {f} using Elastio...")

    temp_dir = os.environ["TEMP_DIR"]

    cmd = ["elastio", "file", "backup", "--hostname-override", "atlassian", f]

    try:
        subprocess.run(cmd, capture_output=False, check=True)
    except subprocess.CalledProcessError as e:
        print(e)
        return e


def download(app, url, username, token):

    temp_dir = os.environ["TEMP_DIR"]
    folder = temp_dir + "/"
    filename = app + ".zip"

    print(f"Downloading {filename} for {app} from {url} to {folder}")

    date = time.strftime("%Y%m%d_%H%M%S")

    session = requests.Session()
    session.auth = (username, token)
    session.headers.update(
        {"Accept": "application/json", "Content-Type": "application/json"}
    )

    file = session.get(url, stream=True)

    file.raise_for_status()

    with open(folder + filename, "wb") as handle:
        for block in file.iter_content(1024):
            handle.write(block)

    return folder + filename


def main():

    parser = argparse.ArgumentParser(
        description="Atlassian Backup with Elastio",
    )
    parser.add_argument(
        "--use-ssm",
        action="store_true",
        default=False,
        help="Use SSM for Secrets",
    )
    parser.add_argument(
        "-d",
        "--directory",
        action="store_true",
        default="/tmp",
        help="Directory where to store temporary download files",
    )
    parser.add_argument(
        "--include-attachments",
        action="store_true",
        default=False,
        help="Whether to include Atlassian Attachments",
    )

    parser.add_argument(
        "--region", default="us-west-2", help="The REGION to use (default: us-west-2)"
    )

    args = parser.parse_args()

    os.environ["AWS_REGION"] = args.region
    os.environ["TEMP_DIR"] = args.directory

    if args.include_attachments:
        os.environ["INCLUDE_ATTACHMENTS"] = "TRUE"
    else:
        os.environ["INCLUDE_ATTACHMENTS"] = "FALSE"

    if args.use_ssm:
        os.environ["USE_SSM"] = "TRUE"
    else:
        os.environ["USE_SSM"] = "FALSE"

    lambda_handler({}, None)


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

    INCLUDE_ATTACHMENTS = os.environ["INCLUDE_ATTACHMENTS"]
    if INCLUDE_ATTACHMENTS == "TRUE":
        attachments = "Y"
        suffix = "with attachments."
    else:
        attachments = "N"
        suffix = "without attachments."

    print(f"Backing up Confluence {suffix}")
    conf_url = confluence.conf_backup(site, user, token, attachments, None)

    print(f"Backing up Jira {suffix}")
    jira_url = jira.jira_backup(site, user, token, attachments, None)

    return conf_url, jira_url


def lambda_handler(event, context):

    REGION = os.environ["AWS_REGION"]

    headers = {"Content-Type": "application/json"}
    message = "Starting Atlassian Backup, press CTRL+C to cancel."

    USE_SSM = os.getenv("USE_SSM", "FALSE")

    if USE_SSM == "TRUE":
        try:
            whoami(boto3.client("sts", region_name=REGION))
        except botocore.exceptions.NoCredentialsError as e:
            print(e)
            return {"statusCode": 403, "headers": headers, "body": e}

        try:
            site, user, token = get_secrets(
                boto3.client("ssm", region_name="us-east-1")
            )
        except botocore.exceptions.ClientError as e:
            print(e)
            return {"statusCode": 404, "headers": headers, "body": e}
    else:
        try:
            site = os.environ["ATLASSIAN_SITE"]
            user = os.environ["ATLASSIAN_USER"]
            token = os.environ["ATLASSIAN_TOKEN"]
        except KeyError as e:
            print("ATLASSIAN credentials not found. Use atlassian_backup -h for help.")

    try:
        conf_url, jira_url = backup(site, user, token)

    except:
        message = "Failed to Backup. Please Check the Logs and Try Again."
        return {"statusCode": 503, "headers": headers, "body": message}

    jira_file = download("jira", jira_url, user, token)
    confluence_file = download("confluence", conf_url, user, token)

    protect(jira_file)
    protect(confluence_file)


if __name__ == "__main__":
    main()
