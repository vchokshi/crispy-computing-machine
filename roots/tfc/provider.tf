terraform {
  required_providers {
    tfe = {
      version = "~> 0.30.2"
    }
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/tfc/tfc.tfstate"
    region = "us-east-1"
  }
}

data "tfe_organization" "iot4" {
  name = "iot4"
}
resource "tfe_team" "team" {
  name         = "iot4-team"
  organization = data.tfe_organization.iot4.name
}


resource "tfe_registry_module" "ccm" {
  vcs_repo {
    display_identifier = "vchokshi/crispy-computing-machine"
    identifier         = "vchokshi/crispy-computing-machine"
    oauth_token_id     = "ot-3okZ77Mt8gwAyoPe"
  }
}

resource "tfe_workspace" "azure" {
  name         = "azure"
  description  = "Azure Workspace for IOT4"
  organization = data.tfe_organization.iot4.name
  tag_names    = ["asu", "development"]
  vcs_repo {
    identifier     = "vchokshi/crispy-computing-machine"
    oauth_token_id = var.GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID
  }
  working_directory = "roots/azure/westeu/terraform"
}
resource "tfe_variable_set" "aws_creds" {
  name          = "AWS-Credentials"
  description   = "AWS Credentials Variable Stack"
  organization  = data.tfe_organization.iot4.name
  workspace_ids = [tfe_workspace.azure.id]

}

resource "tfe_variable" "access_key_id" {
  key             = "aws_access_key_id"
  value           = "AKIAUP3WGZDOK4Z5LZWQ"
  category        = "env"
  description     = "AWS Access Key ID"
  variable_set_id = tfe_variable_set.aws_creds.id
}
resource "tfe_variable" "access_key_secret" {
  key             = "aws_access_key_secret"
  value           = var.AWS_ACCESS_KEY_SECRET
  category        = "env"
  description     = "AWS Access Key ID"
  variable_set_id = tfe_variable_set.aws_creds.id
  sensitive       = true
}



