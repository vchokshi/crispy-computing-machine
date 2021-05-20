locals {
  project       = "elastio"
  owner         = "Vihar Chokshi"
  email_address = "vihar@vipert490"

  dns_hosted_zone_name = "iot4.net"

  ec2_instance_type = "t3.micro"

  cluster_name = local.project

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email_address
  }
}
