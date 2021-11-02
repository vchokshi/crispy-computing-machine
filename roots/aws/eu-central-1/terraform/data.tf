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
data "aws_route53_zone" "private" {
  name         = "internal.${local.dns_hosted_zone_name}"
  private_zone = true

}

#data "aws_acm_certificate" "e" {
#domain   = "e.${local.dns_hosted_zone_name}"
#statuses = ["ISSUED"]
#}

#data "aws_acm_certificate" "ek" {
#domain   = "ek.${local.dns_hosted_zone_name}"
#statuses = ["ISSUED"]
#}

output "aws_availablity_zones_available" {
  value = data.aws_availability_zones.available.names
}
