provider "aws" {
  allowed_account_ids = ["308948682972"]
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
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/master/us-east-1.tfstate"
    region = "us-east-1"
  }

}
# use terraform version 0.13.0
