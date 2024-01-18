provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "136483452582" #this
  ]
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.10.0"
    }

  }
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/aws/security/global.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
