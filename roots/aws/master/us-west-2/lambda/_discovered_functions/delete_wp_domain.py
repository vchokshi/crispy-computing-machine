from __future__ import print_function

import json
import urllib
import boto3
from botocore.exceptions import ClientError

def delete_target_group(event):
    client = boto3.client('elbv2')
    details = event['domain'].split(".")

    tg_name = details[0] + "-" + details[1] + "-target-group"

    try:
        response = client.describe_target_groups(
            Names=[
                tg_name,
            ]
        )
        if response.get('TargetGroups'):
            for tg in response['TargetGroups']:
                tg_arn = tg['TargetGroupArn']

            response = client.delete_target_group(
                TargetGroupArn=tg_arn
            )

        return True

    except ClientError as e:
        return False

def delete_route53_record(event):

    client = boto3.client('route53')

    details = event['domain'].split(".")

    ##getelb name
    client = boto3.client('elbv2')

    details = event['domain'].split(".")
    key = 'LoadBalancers'

    try:
        response = client.describe_load_balancers(
            Names=[
                details[0] + "-" + details[1] + "-elb",
            ]
        )
    except ClientError as e:
        return None


    if(response.get(key)) is not None:
        for lb in response.get(key):
            dns_name = lb['DNSName']

    if details[0] == 'iot4':
        Name = 'www.iot4.net'
    else:
        Name = details[0] + "_" + details[1] + ".iot4.net"

    client = boto3.client('route53')
    try:
        response = client.change_resource_record_sets(
            HostedZoneId='Z3AXZBN956KU95',
            ChangeBatch={
                'Comment': 'string',
                'Changes': [
                    {
                        'Action': 'DELETE',
                        'ResourceRecordSet': {
                            'Name': Name,
                            'Type': 'CNAME',
                            'TTL': 3600,
                            'ResourceRecords': [
                                {
                                    'Value': dns_name
                                },
                            ],
                        }
                    },
                ]
            }
        )

    except ClientError as e:
        print(e)
        return 'FAILED'

def delete_elb(event):

    client = boto3.client('elbv2')

    details = event['domain'].split(".")
    key = 'LoadBalancers'

    try:
        response = client.describe_load_balancers(
            Names=[
                details[0] + "-" + details[1] + "-elb",
            ]
        )
    except ClientError as e:
        return None


    if(response.get(key)) is not None:
        for lb in response.get(key):
            arn = lb['LoadBalancerArn']

    response = client.delete_load_balancer(
        LoadBalancerArn=arn
    )

def delete_ssl_certificate(event):
    client = boto3.client('acm')

    domain = 'www.' + event['domain']

    response = client.list_certificates(
        CertificateStatuses=[
        'PENDING_VALIDATION', 'ISSUED','INACTIVE','EXPIRED','VALIDATION_TIMED_OUT','REVOKED','FAILED'
        ],
    )
    if(response.get('CertificateSummaryList')) is not None:
        for cert in response.get('CertificateSummaryList'):
            x = cert.get('DomainName')
            if x == domain:
                ssl_cert_arn =  cert.get('CertificateArn')

    response = client.delete_certificate(
        CertificateArn=ssl_cert_arn
)

def lambda_handler(event, context):

    required_input = ['domain']

    for val in required_input:
        print(val)
        if event.get(val) is None:
            return 'FAILED'

    delete_route53_record(event)
    delete_elb(event)
    delete_target_group(event)
    delete_ssl_certificate(event)
