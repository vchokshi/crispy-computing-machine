from __future__ import print_function

import json
import urllib
import boto3
from botocore.exceptions import ClientError

def get_ssl_cert_status(event, context):
    client = boto3.client('acm')

    try:
        response = client.describe_certificate(
            CertificateArn=event['acm_arn']
            )
    except ClientError as e:
        return 'FAILED'
            
    print(response)
    return response['Certificate']['Status']

    
def lambda_handler(event, context):
    
    # sub_dict = 'launch'
    # event = event.get('launch')

    required_input = ['acm_arn']
    for val in required_input:
        if event.get(val) is None:
            return 'FAILED'
   
    return get_ssl_cert_status(event, context)
   
        
        
