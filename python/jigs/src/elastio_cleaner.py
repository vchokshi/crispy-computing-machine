#!/usr/bin/env python

import boto3
import os
import time
import argparse


def scan(d, r):

    count=0
    client = boto3.client('ec2', region_name=r)
    response = client.describe_instances()
    for reservation in response["Reservations"]:
        for instance in reservation["Instances"]:
            count+=1
    print(f'  {count} EC2 Instances Detected')

    count=0
    response = client.describe_launch_templates()
    for lt in response['LaunchTemplates']:
        count +=1
        if 'elastio' in lt['LaunchTemplateName'] and d:
            print("Destroying Launch Template")
            client.delete_launch_template(
                LaunchTemplateName=lt['LaunchTemplateName']
            )
        count-=1
    print(f"  {count} EC2 Launch Templates Discovered")

    count=0
    client = boto3.client('cloudwatch', region_name=r)
    response = client.describe_alarms()
    for alarm in response['CompositeAlarms']:
        count+=1
    for alarm in response['MetricAlarms']:
        count+=1

    if count > 0 and d:
        "No Destructors Found"
    print(f'  {count} Cloudwatch Alarms Detected')

    count=0
    client = boto3.client('events', region_name=r)
    response = client.list_rules()
    for re in response['Rules']:
        count+=1
        if 'elastio' in re['Name'] and d:
            print("Destroying Resource")
            targets = client.list_targets_by_rule(
                Rule=re['Name']
            )
            for t in targets['Targets']:
                client.remove_targets(
                    Rule=re['Name'],
                    Ids =[t['Id']]
                )
                time.sleep(1)
            time.sleep(1)
            client.delete_rule(
                Name=re['Name']
            )
            count-=1

    print(f'  {count} Cloudwatch Events Detected')

    count=0
    client = boto3.client('ssm', region_name=r)
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
        if 'elastio' in p['Name'] and d:
            print("Destroying Resource")
            client.delete_parameter(
                Name=p['Name']
            )
            count-=1
        #print(p['Name'])

    print(f'  {count} SSM Parameters Detected')

    count=0
    client = boto3.client('autoscaling-plans', region_name=r)
    a = client.describe_scaling_plans()
    for sp in a['ScalingPlans']:
        count+=1
        #print(sp['ScalingPlanName'])
    if count > 0 and d:
        "No Destructors Found"
    print(f'  {count} AutoScaling Plans Detected')

    count=0
    client = boto3.client('lambda', region_name=r)
    l = client.list_functions()
    for f in l['Functions']:
        count+=1
        if 'elastio' in f['FunctionName'] and d:
            print("Destroying Resource")
            client.delete_function(
                FunctionName=f['FunctionName']
            )
            count-=1
    print(f'  {count} Lambda Functions Detected')

    count=0
    client = boto3.client('cloudformation', region_name=r)
    response = client.list_stacks()
    for s in response['StackSummaries']:
        count+=1
        #print(s['StackName'])
    if count > 0 and d:
        "No Destructors Found"
    print(f'  {count} Cloudformation Stacks Detected')

    count=0
    client = boto3.client('sns', region_name=r)
    response = client.list_topics()
    for t in response['Topics']:
        count+=1
        if 'elastio' in t['TopicArn'] and d:
            print("Destroying Resource")
            client.delete_topic(
                TopicArn=t['TopicArn']
            )
            count-=1
    print(f'  {count} SNS Topics Detected')

    count=0
    client = boto3.client('sqs', region_name=r)
    response = client.list_queues()
    try:
        for q in response['QueueUrls']:
            count+=1
            if 'elastio' in q and d:
                print("Destroying Resource")
                client.delete_queue(
                    QueueUrl=q
                )
                count-=1
    except:
        count=0

    if count > 0 and d:
        "No Destructors Found"
    print(f'  {count} SQS Queues Detected')

    count=0
    client = boto3.client('ecs', region_name=r)
    response = client.list_clusters()
    for c in response['clusterArns']:
            count+=1
    if count > 0 and d:
        "No Destructors Found"
    print(f'  {count} ECS Clusters Detected')

    count=0
    client = boto3.client('kms', region_name=r)
    response = client.list_keys()
    for k in response['Keys']:
        count+=1
        ka = client.list_aliases(
            KeyId=k['KeyId']
        )
        for a in ka['Aliases']:
            if 'elastio' in a['AliasName'] and d:
                print("Destroying Resource")
                try:
                    client.disable_key(KeyId=k['KeyId'])
                    client.schedule_key_deletion(
                        KeyId=k['KeyId'],
                        PendingWindowInDays=7
                    )
                except:
                    pass
                count-=1
            else:
                count-=1
    print(f'  {count} KMS Keys Detected')

    count=0
    client = boto3.client('batch', region_name=r)
    response = client.describe_job_queues()
    for j in response['jobQueues']:
            count+=1
            if 'elastio' in j['jobQueueName'] and d:
                jq=j['jobQueueArn']
                print(f"Destroying Resourcei {jq}")
                client.update_job_queue(
                    jobQueue=jq,
                    state='DISABLED'
                )
                time.sleep(10)
                client.delete_job_queue(
                    jobQueue=j['jobQueueArn']
                )
                count -=1
    print(f'  {count} Batch Job Queues Detected')

    count=0
    response = client.describe_job_definitions()
    for j in response['jobDefinitions']:
        count+=1
        if 'elastio' in j['jobDefinitionName'] and d:
            jd=j['jobDefinitionArn']
            print(f"Deregistering Resource {jd}")
            client.deregister_job_definition(
                jobDefinition=jd
            )
            count -=1
    print(f'  {count} Batch Jobs Definitions Detected')

    count = 0
    response = client.describe_compute_environments()
    for j in response['computeEnvironments']:
        count+=1
        if 'elastio' in j['computeEnvironmentName'] and d:
            print("Destroying Resource")
            client.update_compute_environment(
                computeEnvironment=j['computeEnvironmentArn'],
                state='DISABLED'
            )
            time.sleep(20)
            client.delete_compute_environment(
                computeEnvironment=j['computeEnvironmentArn']
            )
            count-=1
    print(f'  {count} Batch Compute Environments Detected')


if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument('-d', '--destroy', action='store_true')
    parser.add_argument("--region", default='us-east-1')
    args = parser.parse_args()
    print(f'\nStarting to scan {args.region}')
    scan(args.destroy, args.region)
