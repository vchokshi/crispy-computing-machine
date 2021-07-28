import boto3
import pytest
from moto import mock_ec2, mock_organizations, mock_s3, mock_sts
import time, datetime
from aws_tools import main


@mock_organizations
def create_organization():
    client = boto3.client("organizations")
    response = client.create_organization(FeatureSet="ALL")
    return response["Organization"]


def create_accounts(client):
    response = client.create_account(Email="tester", AccountName="test")


@pytest.fixture(scope="function")
def sts():
    with mock_sts():
        yield boto3.client("sts")


@pytest.fixture(scope="function")
def ec2():
    with mock_ec2():
        yield boto3.client("ec2")


@mock_organizations
def test_get_accounts_list():

    org = create_organization()
    accounts = main.get_accounts_list(
        boto3.client("organizations", region_name="us-east-1")
    )
    assert len(accounts) == 1
    accounts = main.get_accounts_list_with_names(
        boto3.client("organizations", region_name="us-east-1")
    )


@mock_organizations
def test_get_account_details():

    org = create_organization()
    response = main.get_account_details(
        org["MasterAccountId"], boto3.client("organizations", region_name="us-east-1")
    )
    assert response["Name"] == "master"


@mock_s3
@mock_sts
def test_get_s3_details():
    some_binary_data = b'Here we have some data'
    more_binary_data = b'Here we have some more data'

    org = create_organization()
    creds = main.assume_role(boto3.client("sts"), org["MasterAccountId"])

    client = boto3.client(
        "s3",
        region_name="us-east-1",
        aws_access_key_id=creds["AccessKeyId"],
        aws_secret_access_key=creds["SecretAccessKey"],
        aws_session_token=creds["SessionToken"],
    )

    response = client.create_bucket(Bucket="derp")
    response = client.create_bucket(Bucket="derp1")

    client.put_object(Body=some_binary_data, Bucket='derp', Key='filename.txt')
    client.put_object(Body=more_binary_data, Bucket='derp1', Key='filename4.txt')

    buckets_count = main.get_s3_details(org["MasterAccountId"], client)
    assert buckets_count == 2
