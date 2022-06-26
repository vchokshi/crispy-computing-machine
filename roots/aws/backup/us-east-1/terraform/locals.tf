locals {
  project       = "iot-elastio"
  owner         = "Vihar Chokshi"
  email_address = "backup@iot4.net"

  dns_hosted_zone_name = "backup.iot4.net"

  ec2_instance_type = "t3.micro"

  region_short = "east"

  common_tags = {
    Owner       = local.owner
    Email       = local.email_address
    Use_Elastio = "True"
  }
}
