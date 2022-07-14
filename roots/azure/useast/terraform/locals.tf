locals {
  project     = "week-12-stack"
  owner       = "Vihar Chokshi"
  email       = "vc@iot4.net"
  stack-color = "green"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
