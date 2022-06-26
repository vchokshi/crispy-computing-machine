resource "tfe_workspace" "azure" {
  name         = "azure_asu_westeu"
  description  = "Azure Workspace for ASU"
  organization = tfe_organization.iot4.name
  tag_names    = ["asu", "development"]
  vcs_repo {
    identifier     = "vchokshi/crispy-computing-machine"
    oauth_token_id = var.GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID
  }
  working_directory = "roots/azure/westeu/terraform"
}
resource "tfe_workspace" "azure_east" {
  name         = "azure_asu_eastus"
  description  = "Azure Workspace for ASU"
  organization = tfe_organization.iot4.name
  tag_names    = ["asu", "development"]
  vcs_repo {
    identifier     = "vchokshi/crispy-computing-machine"
    oauth_token_id = var.GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID
  }
  working_directory = "roots/azure/eastus/terraform"
}

resource "tfe_workspace" "do" {
  name         = "digital_ocean"
  description  = "Digital Ocean Workspace for IOT"
  organization = tfe_organization.iot4.name
  tag_names    = ["eagl", "development"]
  vcs_repo {
    identifier     = "vchokshi/crispy-computing-machine"
    oauth_token_id = var.GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID
  }
  working_directory = "roots/digitalocean"
}
