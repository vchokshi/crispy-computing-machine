locals {
  project_id   = "lustrous-walker-297222"
  network      = "atlantis-gcp"
  subnetwork   = "atlantis--gcp-subnetwork"
  region       = "us-central1"
  zone         = "us-central1-a"
  domain       = "atlantis.gcp.iot4.net"
  managed_zone = "gcp-iot4"

  github_repo_allow_list = "github.com/vchokshi/*"
  github_user            = "crispy-computing-robot"
  github_token           = var.ccm_robot_pat
  github_webhook_secret  = var.atlantis_webhook_secret
}