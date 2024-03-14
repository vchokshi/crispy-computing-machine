# Debian 9 Stretch
data "aws_ami" "debian-9" {
  most_recent = true
  owners      = ["379101102735"]
  filter {
    name   = "name"
    values = ["debian-stretch-*"]

  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]

  }

}
# Debian 10 Buster
data "aws_ami" "debian-10" {
  most_recent = true
  owners      = ["136693071363"]
  filter {
    name   = "name"
    values = ["debian-10-amd64-*"]

  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]

  }

}
# Debian 11 Bullseye
data "aws_ami" "debian-11" {
  most_recent = true
  owners      = ["136693071363"]
  filter {
    name   = "name"
    values = ["debian-11-amd64-*"]

  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]

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
data "aws_ami" "west-amazon-linux-2" {
  provider    = aws.us-west-2
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


data "aws_route53_zone" "iot" {
  name = "backup.iot4.net"

}

data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}
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

data "aws_route53_zone" "do" {
  name = local.dns_hosted_zone_name
}

data "aws_iam_instance_profile" "instance_profile" {
  name = "backup-admin"
}

data "aws_region" "eu" {}
data "aws_region" "ue" { provider = aws.us-east-1 }
data "aws_region" "uw" { provider = aws.us-west-2 }
