data "aws_ami" "amazon-linux-2" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"]
  }
}
data "aws_ami" "east-amazon-linux-2" {
  provider    = aws.us-east-1
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"]
  }
}

data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_availability_zones" "east-available" {
  provider = aws.us-east-1
  state    = "available"
}

data "aws_availability_zones" "west-available" {
  provider = aws.us-west-2
  state    = "available"
}

data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}

data "aws_route53_zone" "public" {
  name = local.dns_hosted_zone_name
}

data "aws_iam_instance_profile" "instance_profile" {
  name = "backup-admin"
}

data "aws_region" "eu" {}
data "aws_region" "ue" { provider = aws.us-east-1 }
data "aws_region" "uw" { provider = aws.us-west-2 }
