provider "aws" {
  allowed_account_ids = ["308948682972"]
  region              = var.region
}

terraform {
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/master/eu-central-1.tfstate"
    region = "us-east-1"
  }

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
