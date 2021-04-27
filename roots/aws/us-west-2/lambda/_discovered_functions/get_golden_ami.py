from __future__ import print_function
    
def get_ami_golden_image(event, context):
    
    import json
    import boto3
    from botocore.exceptions import ClientError


    client = boto3.client('ec2')
    
    try:
        response = client.describe_images(
           
            Owners=[
                '308948682972',
            ]
        )
  
    except ClientError as e:
        return 'FAILED'
        
    if 'Images' in response.keys():
        for i in response.get('Images'):
            if i['Name'] == 'www-golden-image':
                return i['ImageId']
    return None
    
def lambda_handler(event, context):

    import urllib
    
    return get_ami_golden_image(event, context)
    
