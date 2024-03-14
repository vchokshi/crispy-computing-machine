terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~>2.0"
    }
    aws = {
      source                = "hashicorp/aws"
      version               = "~> 4.14"
      configuration_aliases = [aws.us-east-1, aws.us-west-2]
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

provider "aws" {
  region = "eu-central-1"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}

provider "aws" {
  alias  = "us-west-2"
  region = "us-west-2"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}
