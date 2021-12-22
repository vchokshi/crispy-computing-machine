locals {
  project       = "iot-elastio-vpc"
  owner         = "Vihar Chokshi"
  email_address = "backup@iot4.net"

  dns_hosted_zone_name = "backup.iot4.net"

  ec2_instance_type = "t3.micro"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email_address
  }
}
