#!/usr/bin/env python

import boto3
import os


def scan():

    count=0
    client = boto3.client('ec2')
    response = client.describe_instances()
    for reservation in response["Reservations"]:
        for instance in reservation["Instances"]:
            count+=1
    print(f'{count} EC2 Instances Detected')


    count=0
    client = boto3.client('cloudwatch')
    response = client.describe_alarms()
    for alarm in response['CompositeAlarms']:
        count+=1
        #print("Composite:", alarm['AlarmName'])
    for alarm in response['MetricAlarms']:
        count+=1
        #print("Metric:", alarm['AlarmName'])

    print(f'{count} Cloudwatch Alarms Detected')

    count=0
    client = boto3.client('events')
    response = client.list_rules()
    for r in response['Rules']:
        count+=1
        #print(r['Name'])

    print(f'{count} Cloudwatch Events Detected')

    count=0
    client = boto3.client('ssm')
    response=client.describe_parameters(
        ParameterFilters=[
            {
                'Key': 'Name',
                'Option': 'BeginsWith',
                'Values': ['/elastio']
            }
        ]
    )
    for p in response['Parameters']:
        count+=1
        #print(p['Name'])

    print(f'{count} SSM Parameters Detected')

    count=0
    client = boto3.client('autoscaling-plans')
    r = client.describe_scaling_plans()
    for sp in r['ScalingPlans']:
        count+=1
        #print(sp['ScalingPlanName'])
    print(f'{count} SSM AutoScaling Plans Detected')

    count=0
    client = boto3.client('lambda')
    r = client.list_functions()
    for f in r['Functions']:
        count+=1
        #print(f['FunctionName'])
    print(f'{count} Lambda Functions Detected')

    count=0
    client = boto3.client('cloudformation')
    response = client.list_stacks()
    for s in response['StackSummaries']:
        count+=1
        #print(s['StackName'])
    print(f'{count} Cloudformation Stacks Detected')

    count=0
    client = boto3.client('sns')
    response = client.list_topics()
    for t in response['Topics']:
        count+=1
        #print(s['StackName'])
    print(f'{count} SNS Topics Detected')

    count=0
    client = boto3.client('sqs')
    response = client.list_queues()
    try:
        for q in response['QueueUrls']:
            count+=1
            #print(s['StackName'])
    except:
        count=0

    print(f'{count} SQS Queues Detected')

    count=0
    client = boto3.client('ecs')
    response = client.list_clusters()
    for c in response['clusterArns']:
            count+=1
    print(f'{count} ECS Clusters Detected')

    count=0
    client = boto3.client('kms')
    response = client.list_keys()
    for k in response['Keys']:
            count+=1
    print(f'{count} KMS Keys Detected')


if __name__ == "__main__":

    regions = ['us-east-1', 'eu-central-1', 'us-west-2', 'us-west-1', 'us-east-2']
    for r in regions:
        print(f'\nStarting to scan {r}')
        os.environ["AWS_DEFAULT_REGION"] = r
        scan()
