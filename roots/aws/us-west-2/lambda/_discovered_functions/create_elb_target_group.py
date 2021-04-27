from __future__ import print_function

def search(name, dict):
    return dict.get(name)
    
def create_elb_target_group(event, context):
    
    import json
    import urllib
    import boto3
    from botocore.exceptions import ClientError
    
    client = boto3.client('elbv2')
    details = event['domain'].split(".")
    
    tg_name = details[0] + "-" + details[1] + "-target-group"
    
    try:
        response = client.create_target_group(
            Name=tg_name,
            Protocol='HTTP',
            Port=80,
            VpcId='vpc-54cc6c32'
        )
        if 'TargetGroups' in response.keys():
            for tg in response['TargetGroups']:
                arn = tg['TargetGroupArn']

    except ClientError as e:
        print(e)
        return 'FAILED'
    
    for i in event['ec2_instances']:
        response = client.register_targets(
           TargetGroupArn=arn,
            Targets=[
                {
                    'Id': i,
                    'Port': 80
                },
            ]
    )
    
    return arn

def lambda_handler(event, context):

    import json
    import urllib
    
    required_input = 'domain'
    
    if required_input in event.keys():
        if event[required_input] is not None:
            return create_elb_target_group(event, context)
        else:
            return 'FAILED'
    else:
        return 'FAILED'
