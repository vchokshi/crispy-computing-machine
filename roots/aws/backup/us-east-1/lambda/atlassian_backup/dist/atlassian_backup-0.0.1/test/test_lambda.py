import os

import boto3
from moto import mock_sns, mock_ssm

from src import backup_to_elastio, get_secrets, send_sns

REGION = "us-east-1"


def test_backup_to_elastio():

    url = "https://iot4-biggfiles.s3.amazonaws.com/1K"
    resp = backup_to_elastio(url)
    assert resp["statusCode"] == 200
    url = "https://iot4-biggfiles.s3.amazonaws.com/1M"
    resp = backup_to_elastio(url)
    assert resp["statusCode"] == 200


@mock_sns
def test_send_sns():
    message = "Success. \n http://derp.atlassian.net/wiki. \n http://derp.confluence.wiki?download"

    client = boto3.client("sns", region_name=REGION)

    res = send_sns(client, message)
    assert res is False

    response = client.create_topic(Name="topic")
    os.environ["SNS_TOPIC_ARN"] = response["TopicArn"]
    res = send_sns(client, message)
    assert res is True


@mock_ssm
def test_get_secrets():
    client = boto3.client("ssm", region_name=REGION)
    client.put_parameter(Name="/atlassian/site", Type="SecureString", Value="westeros")
    client.put_parameter(
        Name="/atlassian/user", Type="SecureString", Value="kingslayer"
    )
    client.put_parameter(
        Name="/atlassian/api_token", Type="SecureString", Value="8675309"
    )

    site, user, token = get_secrets(client)
    assert site == "westeros"
    assert user == "kingslayer"
    assert token == "8675309"


if __name__ == "__main__":

    test_get_secrets()
    test_send_sns()

    test_backup_to_elastio()
