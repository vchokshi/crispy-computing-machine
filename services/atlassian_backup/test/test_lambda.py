import boto3
from moto import mock_ssm

from src import get_secrets

REGION = "us-east-1"


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
