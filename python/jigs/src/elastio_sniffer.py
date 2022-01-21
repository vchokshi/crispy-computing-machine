#!/usr/bin/env python

import boto3
import os
import time


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
        if 'elastio' in r['Name']:
            targets = client.list_targets_by_rule(
                Rule=r['Name']
            )
            for t in targets['Targets']:
                client.remove_targets(
                    Rule=r['Name'],
                    Ids =[t['Id']]
                )
                time.sleep(1)
            time.sleep(1)
            client.delete_rule(
                Name=r['Name']
            )
            count-=1

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
        if 'elastio' in p['Name']:
            client.delete_parameter(
                Name=p['Name']
            )
            count-=1
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
        if 'elastio' in r['Functionname']:
            client.delete_function(
                FunctionName=f['FunctionName']
            )
            count-=1
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
        if 'elastio' in t['TopicArn']:
            client.delete_topic(
                TopicArn=t['TopicArn']
            )
            count-=1
    print(f'{count} SNS Topics Detected')

    count=0
    client = boto3.client('sqs')
    response = client.list_queues()
    try:
        for q in response['QueueUrls']:
            count+=1
            if 'elastio' in q:
                client.delete_queue(
                    QueueUrl=q
                )
                count-=1
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
        ka = client.list_aliases(
            KeyId=k['KeyId']
        )
        for a in ka['Aliases']:
            if 'elastio' in a['AliasName']:
                try:
                    client.disable_key(KeyId=k['KeyId'])
                    client.schedule_key_deletion(
                        KeyId=k['KeyId'],
                        PendingWindowInDays=7
                    )
                except:
                    pass
                count-=1
    print(f'{count} KMS Keys Detected')

    count=0
    client = boto3.client('batch')
    response = client.describe_job_queues()
    for j in response['jobQueues']:
            count+=1
            if 'elastio' in j['jobQueueName']:
                client.update_job_queue(
                    jobQueue=j['jobQueueArn'],
                    state='DISABLED'
                )
                time.sleep(10)
                client.delete_job_queue(
                    jobQueue=j['jobQueueArn']
                )
                count -=1
    print(f'{count} Batch Job Queues Detected')

    count=0
    response = client.describe_job_definitions()
    for j in response['jobDefinitions']:
        count+=1
        if 'elastio' in j['jobDefinitionName']:
            client.deregister_job_definition(
                jobDefinition=j['jobDefinitionArn']
            )
            count -=1
    print(f'{count} Batch Jobs Definitions Detected')

    count = 0
    response = client.describe_compute_environments()
    for j in response['computeEnvironments']:
        count+=1
        if 'elastio' in j['computeEnvironmentName']:
            client.update_compute_environment(
                computeEnvironment=j['computeEnvironmentArn'],
                state='DISABLED'
            )
            time.sleep(20)
            client.delete_compute_environment(
                computeEnvironment=j['computeEnvironmentArn']
            )
            count-=1
    print(f'{count} Batch Compute Environments Detected')


if __name__ == "__main__":

    regions = ['eu-central-1', 'us-west-1']
    for r in regions:
        print(f'\nStarting to scan {r}')
        os.environ["AWS_DEFAULT_REGION"] = r
        scan()
