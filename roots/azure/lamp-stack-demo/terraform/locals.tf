locals {
  project     = "week-13-stack"
  owner       = "Vihar Chokshi"
  email       = "vchokhi23@gmail.com"
  stack-color = "cyan"

  common_tags = {
    Name  = local.project
    Owner = local.owner
    Email = local.email
  }
}
