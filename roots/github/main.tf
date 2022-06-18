provider "aws" {}

terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/github/github.tfstate"
    region = "us-east-1"
  }
}

# Configure the GitHub Provider
provider "github" {}
