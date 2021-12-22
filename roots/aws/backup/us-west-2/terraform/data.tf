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

data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}

data "aws_route53_zone" "public" {
  name = local.dns_hosted_zone_name
}

output "aws_availablity_zones_available" {
  value = data.aws_availability_zones.available.names
}

data "aws_iam_instance_profile" "vchokshi" {
  name = "vchokshi"
}
