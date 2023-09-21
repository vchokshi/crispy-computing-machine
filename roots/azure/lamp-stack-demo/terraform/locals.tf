locals {
  project     = "week-12-stack"
  owner       = "Vihar Chokshi"
  email       = "vchokhi23@gmail.com"
  stack-color = "red"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
