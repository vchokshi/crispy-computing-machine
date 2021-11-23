provider "aws" {
  allowed_account_ids = ["375423940384"]
  region              = var.region
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    http = {
      source = "hashicorp/http"
    }
  }
  required_version = ">= 0.13"
}
# use terraform version 0.13.0
