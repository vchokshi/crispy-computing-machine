from __future__ import print_function

def datetime_handler(x):
    import datetime

    if isinstance(x, datetime.datetime):
        return x.isoformat()
    raise TypeError("Unknown type")
    
def get_ec2_web_servers(event, context):
    
    import json
    import boto3
    from botocore.exceptions import ClientError


    client = boto3.client('ec2')
    
    try:
        response = client.describe_instances(
            Filters=[
                {
                    'Name': 'tag-value',
                    'Values': ['web-server']
                },
            ],
        )
    except ClientError as e:
        return 'FAILED'
    
    res = []

    if 'Reservations' in response.keys():
        for r in response['Reservations']:
            for i in r['Instances']:
                state = i['State'].get('Name')
                if state == 'running':
                    res.append(i['InstanceId'])
            
    return res
    
def lambda_handler(event, context):

    import urllib
    
    return get_ec2_web_servers(event, context)
    
