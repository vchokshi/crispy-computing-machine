module "atlantis" {
  source     = "bschaatsbergen/atlantis/gce"
  name       = "atlantis"
  network    = local.network
  subnetwork = local.subnetwork
  region     = local.region
  zone       = local.zone
  service_account = {
    email  = google_service_account.atlantis.email
    scopes = ["cloud-platform"]

  }
  # Note: environment variables are shown in the Google Cloud UI
  # See the `examples/secure-env-vars` if you want to protect sensitive information
  env_vars = {
    ATLANTIS_GH_USER           = local.github_user
    ATLANTIS_GH_TOKEN          = local.github_token
    ATLANTIS_GH_WEBHOOK_SECRET = local.github_webhook_secret
    ATLANTIS_REPO_ALLOWLIST    = local.github_repo_allow_list
    ATLANTIS_ATLANTIS_URL      = "https://${local.domain}"
    ATLANTIS_REPO_CONFIG_JSON  = jsonencode(yamldecode(file("${path.module}/server-atlantis.yaml")))

  }
  domain  = local.domain
  project = local.project_id

}
