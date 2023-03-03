from __future__ import print_function

import json
import urllib
import boto3
from botocore.exceptions import ClientError

def create_elb(details, context):

        client = boto3.client('elbv2')

        response = client.create_load_balancer(
        Name=details[0] + '-' + details[1] + '-elb',
        Subnets=[
            'subnet-5baabf12',
            'subnet-819d50e7'
        ],
        SecurityGroups=[
            'sg-abe2d5d1',
        ],
        Scheme='internet-facing',
        Tags=[
            {
                'Key': 'Created_By',
                'Value': "Lambda"
            },
        ],
        IpAddressType='ipv4'
        )
        if 'LoadBalancers' in response.keys():
            for lb in response['LoadBalancers']:
                return lb['LoadBalancerArn']
        else:
            return None

def check_elb(event, context):

    client = boto3.client('elbv2')

    details = event['domain'].split(".")
    try:
        response = client.describe_load_balancers(
            Names=[
                details[0] + '-' + details[1] + '-elb'
            ]
        )
        ##Elb Exists
        if 'LoadBalancers' in response.keys():
            for lb in response['LoadBalancers']:
                return lb['LoadBalancerArn']

    except ClientError as e:
        ##Elb does not exist
        return create_elb(details, context)

def lambda_handler(event, context):

    required_input = 'domain'

    if required_input  in event.keys():
        if event[required_input] is not None:
            return check_elb(event, context)
        else:
            return 'FAILED'
    else:
        return 'FAILED'
