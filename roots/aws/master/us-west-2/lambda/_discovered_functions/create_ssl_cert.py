from __future__ import print_function

import json
import urllib
import boto3
from botocore.exceptions import ClientError

def get_ssl_cert(domain):
    client = boto3.client('acm')

    response = client.list_certificates(
        CertificateStatuses=[
        'PENDING_VALIDATION', 'ISSUED','INACTIVE','EXPIRED','VALIDATION_TIMED_OUT','REVOKED','FAILED'
        ],
    )
    if(response.get('CertificateSummaryList')) is not None:
        for cert in response.get('CertificateSummaryList'):
            x = cert.get('DomainName')
            if x == domain:
                return cert.get('CertificateArn')

    print('Returning false')
    return False

def create_ssl_certificate(event):
    client = boto3.client('acm')

    response = client.request_certificate(
        DomainName='www.' + event['domain'],
        DomainValidationOptions=[
            {
                'DomainName': 'www.' + event['domain'],
                'ValidationDomain': event['domain']
            },
        ]
    )
    return response.get('CertificateArn')

def lambda_handler(event, context):

    client = boto3.client('acm')
    required_input = ['domain']

    for val in required_input:
        if event.get(val) is None:
            return 'FAILED'

    domain = 'www.' + event['domain']

    arn = get_ssl_cert(domain)

    if arn is not True:
        arn = create_ssl_certificate(event)

    return arn
