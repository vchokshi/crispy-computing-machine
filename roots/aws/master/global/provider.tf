provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "308948682972"
  ]
}
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.33"
    }
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/master/global.tfstate"
    region = "us-east-1"
  }
}
