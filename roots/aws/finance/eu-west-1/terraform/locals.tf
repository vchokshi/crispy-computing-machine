locals {
  project       = "finance"
  owner         = "Vihar Chokshi"
  email_address = "vchokshi@control"

  ec2_instance_type    = "t3.micro"
  dns_hosted_zone_name = "finance.iot4.net"

  cluster_name = local.project

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email_address
  }
}
