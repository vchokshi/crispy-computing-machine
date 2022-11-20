locals {
  project     = "IOT4 Buildout"
  owner       = "Vihar Chokshi"
  email       = "vc@iot4.net"
  stack-color = "red"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
