provider "aws" {
  region = "us-west-1"
  allowed_account_ids = [
    "308948682972" #master
  ]
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/master/us-west-1.tfstate"
    region = "us-east-1"
  }
}
