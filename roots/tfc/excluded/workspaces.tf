resource "tfe_workspace" "aws" {
  name         = "aws_master_global"
  description  = "AWS Workspace for IOT4 (Master)"
  organization = tfe_organization.iot4.name
  tag_names    = ["iot4", "development"]
  vcs_repo {
    identifier     = "vchokshi/crispy-computing-machine"
    oauth_token_id = var.GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID
  }
  working_directory = "roots/aws/master/global"
}
