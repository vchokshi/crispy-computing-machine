from __future__ import print_function

def attach_instances(event,context):
    import boto3
    from botocore.exceptions import ClientError

    client = boto3.client('autoscaling')
    
    details = event['domain'].split(".") 
    asg_name = details[0] + "-" + details[1] + "-auto-scaling-group"

    response = client.attach_instances(
        InstanceIds=event['ec2_instances'],
        AutoScalingGroupName=asg_name
    )
    
def check_auto_scaling_group(event, context):
    
    import boto3
    from botocore.exceptions import ClientError

    client = boto3.client('autoscaling')
    
    details = event['domain'].split(".") 
    asg_name = details[0] + "-" + details[1] + "-auto-scaling-group"

    try:
        response = client.describe_auto_scaling_groups(
            AutoScalingGroupNames=[
                asg_name,
            ]
        )
    except ClientError as e:
        return False
    
    if response.get('AutoScalingGroups'):
        for a in response['AutoScalingGroups']:
            for i in a['Instances']:
                if i['InstanceId'] not in event['ec2_instances']:
                    client.attach_instances(
                        InstanceIds=[
                            i['InstanceId']
                        ],
                        AutoScalingGroupName=asg_name
                    )
        return True
    
    return False
    
def create_auto_scaling_group(event, context):
    
    import boto3
    from botocore.exceptions import ClientError

    client = boto3.client('autoscaling')
    
    details = event['domain'].split(".") 
    asg_name = details[0] + "-" + details[1] + "-auto-scaling-group"
    lc_name = details[0] + "-" + details[1] + "-launch-configuration"


    response = client.create_auto_scaling_group(
        AutoScalingGroupName=asg_name,
        LaunchConfigurationName=lc_name,
        MinSize=1,
        MaxSize=3,
        DesiredCapacity=1,
        DefaultCooldown=600,
        AvailabilityZones=[
            'us-west-2a',
            'us-west-2b'
        ],
        TargetGroupARNs=[
            event['elb_tg_arn'],
        ]
    )
    
def check_launch_configuration(event, context):
    import boto3
    from botocore.exceptions import ClientError

    client = boto3.client('autoscaling')

    details = event['domain'].split(".") 
    lc_name = details[0] + "-" + details[1] + "-launch-configuration"
    
    try:
        response = client.describe_launch_configurations(
            LaunchConfigurationNames=[
                lc_name,
            ]
        )
    except ClientError as e:
        return False
        
    if response.get('LaunchConfigurations'):
        print("Entered ")
        return True
    
    return False
    
def create_launch_configuration(event, context):
    
    import boto3
    from botocore.exceptions import ClientError

    client = boto3.client('autoscaling')
    
    details = event['domain'].split(".") 
    lc_name = details[0] + "-" + details[1] + "-launch-configuration"
    try:
        response = client.create_launch_configuration(
            LaunchConfigurationName=lc_name,
            ImageId=event['ami_image'],
            KeyName='id_rsa',
            SecurityGroups=[
                'sg-f9e2d583',
            ],
            InstanceType='t2.micro',
            InstanceMonitoring={
                'Enabled': False
            }
        )
                
    except ClientError as e:
        print(e)
        return 'FAILED'
    
    return True
    
def lambda_handler(event, context):

    import json
    import urllib
    
    required_input = ['ami_image','elb_tg_arn']

    for val in required_input:
        if event.get(val) is None:
            return 'FAILED'
            
    lc = check_launch_configuration(event, context)
    if lc is not True:
        lc = create_launch_configuration(event, context)
        
    asg = check_auto_scaling_group(event, context)
    if asg is not True:
        create_auto_scaling_group(event, context)
        attach_instances(event,context)
    
    return "Success"
    
        
        
    

