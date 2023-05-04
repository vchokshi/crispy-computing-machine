locals {
  project       = "finance"
  owner         = "Vihar Chokshi"
  email_address = "vchokshi23@gmail.com"

  dns_hosted_zone_name = "finance.iot4.net"
  cluster_name         = local.project

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email_address
  }
}
