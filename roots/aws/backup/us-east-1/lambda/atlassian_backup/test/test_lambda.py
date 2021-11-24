import os

import boto3
from moto import mock_sns, mock_ssm

from src import get_secrets, send_sns

REGION = "us-east-1"


# @mock_s3
# def test_elastio_mock():
# S3_BUCKET = "dump"

# conn = boto3.resource("s3", region_name="us-east-1")
# conn.create_bucket(Bucket=S3_BUCKET)

# url = "https://iot4-biggfiles.s3.amazonaws.com/1K"
# resp = elastio_mock(url, url, S3_BUCKET)

# assert resp["body"] == "OK"
# assert resp["statusCode"] == 200


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

    # test_elastio_mock()
