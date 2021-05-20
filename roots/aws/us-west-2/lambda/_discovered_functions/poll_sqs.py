from __future__ import print_function

import json
import urllib
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    client = boto3.client('sqs')
    
    res = {}
    queue_url = 'https://sqs.us-west-2.amazonaws.com/308948682972/Create_New_WP_Domain'
    
    response = client.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10,
        VisibilityTimeout=30,
        WaitTimeSeconds=5,
    )
    if 'Messages' in response.keys():
        for message in response['Messages']:
            body = json.loads(message['Body'])
            if body['Subject'] == 'New Domain':
                delete = client.delete_message(
                    QueueUrl=queue_url,
                    ReceiptHandle=message['ReceiptHandle']
                )
                message = body.get('Message').split(":")
                res['domain'] = message[1]
                return res

            else: return None
    else:
        return None
