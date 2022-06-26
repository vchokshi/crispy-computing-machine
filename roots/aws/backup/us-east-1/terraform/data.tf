data "aws_ami" "amazon-linux-2" {
  most_recent = true
  owners      = ["self"]

  filter {
    name   = "name"
    values = ["base-iot4*"]
  }
}

data "aws_availability_zones" "available" {
  state = "available"
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
