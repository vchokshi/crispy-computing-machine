from __future__ import print_function

def update_route_53(event, context):
    
    import boto3
    from botocore.exceptions import ClientError

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

    if details[0] == 'vchalk': 
        Name = 'www.vchalk.net'
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
                        'Action': 'UPSERT',
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
        print(response)
                
    except ClientError as e:
        print(e)
        return 'FAILED'
    

def lambda_handler(event, context):

    import json
    import urllib
    
    required_input = ['domain']

    for val in required_input:
        print(val)
        if event.get(val) is None:
            return 'FAILED'
    
    return update_route_53(event, context)

