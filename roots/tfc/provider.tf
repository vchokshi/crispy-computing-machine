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

resource "tfe_organization" "iot4" {
  name  = "IOT4"
  email = "vc@iot4.net"

}

resource "tfe_team" "team" {
  name         = "iot4-team"
  organization = tfe_organization.iot4.name
}

resource "tfe_oauth_client" "iot4" {
  name             = "iot4 oauth client"
  organization     = tfe_organization.iot4.name
  api_url          = "https://api.github.com"
  http_url         = "https://github.com"
  oauth_token      = "my-vcs-provider-token"
  service_provider = "github"

}

resource "tfe_registry_module" "ccm" {
  vcs_repo {
    display_identifier = "vchokshi/crispy-computing-machine"
    identifier         = "vchokshi/crispy-computing-machine"
    oauth_token_id     = tfe_oauth_client.iot4.oauth_token_id
  }
}
