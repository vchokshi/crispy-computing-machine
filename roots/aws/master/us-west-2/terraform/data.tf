data "aws_kms_key" "by_id" {
  key_id = "77fbd35b-fdb1-41ec-9000-3cb78b4b5d40"
}
data "aws_region" "current" {
}

data "aws_caller_identity" "current" {
}

output "account_id" {
  value = data.aws_caller_identity.current.account_id
}

output "caller_arn" {
  value = data.aws_caller_identity.current.arn
}

output "caller_user" {
  value = data.aws_caller_identity.current.user_id
}

data "http" "ip" {
  url = "http://icanhazip.com"
}

output "My_IP_Zone" {
  value = data.http.ip.url
}

data "aws_route53_zone" "public" {
  name         = "${var.domain}."
  private_zone = false
}

data "aws_route53_zone" "aws" {
  name         = "aws.${var.domain}."
  private_zone = false
}

output "DNS_Zone" {
  value = data.aws_route53_zone.public.name
}

data "aws_ami" "amazon" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-ecs-hvm-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

output "Amazon_AMI" {
  value = data.aws_ami.amazon.id
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] ## Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu*22.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

output "Ubuntu_AMI" {
  value = data.aws_ami.ubuntu.id
}

data "aws_ami" "windows" {
  most_recent = true
  owners      = ["801119661308"]
  filter {
    name   = "name"
    values = ["*Windows*2016*Base*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}
output "Windows_AMI" {
  value = data.aws_ami.windows.id
}
