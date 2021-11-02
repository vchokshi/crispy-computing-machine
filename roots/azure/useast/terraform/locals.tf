locals {
  project     = "week-12-stack"
  owner       = "Vihar Chokshi"
  email       = "vc@iot4.net"
  stack-color = "red"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
