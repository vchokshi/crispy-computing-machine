# Elastio LAMP Stack Backup As Code Example 1

## Mission: Build a LAMP stack and provide prescriptive templates to demonstrate how backup as code will work.

# Objectives
1. Build the LAMP stack using terraform and ansible within IaC
2. Use Wordpress as the "mock" application to "roleplay" as a "developer".
3. Trigger backup as code due to application layer changes.

## Components

_Vihar_
* Wordpress
* PHP, MySQL
* AWS
* Terraform
* Ansible
* Git

_Elastio_
* APIs
* Automation


### Design

#### Topology
How will the components above interconnect?

#### Architechture
TBD

### Specifications
TBD

### Implementation
TBD

### Wordpress
Pretend to be a Wordpress Developer. Change the Codex.

1. Make an App Change to cause the EC2 Instance to Snap
2. Make an App Change to cause the RDS Instance to Snap

### PHP

1. Use PHP 7.0

### MySQL

1. Use MySQL 5.6 in RDS

### AWS

1. Build an Entire Cloud for the LAMP Stack.



### HoW To

1. Start by building terraform.
2. Soure .helpers.sh to get some utilities
3. Run the pipeline. This builds the AWS instance with a LAMP stack. It ends with deploying index.html
4. Navigate to e.iot4.net. This is the LAMP stack behind an ALB doing HTTPS. (You might need an ACM cert!)
4. Navigate to ek.iot4.net. This is nginx running in a K8s Cluster.
5. Demo
5.1 Change the index.html file in the ansible directory. This will simulate a bad developer change.
5.2 Run pipeline to deploy the change. Click to see at e.iot4.net
5.3 Go back to terraform and get the instance_id. Use save() from .helpers to save the ENV VAR
5.4 In the python directory, pip install -r requirements.txt and python elastio.py -b -i=$AWS_INSTANCE_ID
