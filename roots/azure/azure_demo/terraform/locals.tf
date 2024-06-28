locals {
  project     = "week-13-stack"
  owner       = "Vihar Chokshi"
  email       = "vchokshi23@gmail.com"
  stack-color = "blue"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
