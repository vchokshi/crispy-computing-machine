locals {
  project       = "Secubernetes"
  owner         = "Vihar Chokshi"
  email_address = "scuby@iot4.net"

  dns_hosted_zone_name = "backup.iot4.net"

  ec2_instance_type = "t3.micro"

  common_tags = {
    Owner = local.owner
    Email = local.email_address
  }
}
