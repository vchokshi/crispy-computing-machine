provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "438513923646"
  ]
}

terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/aws/backup/global.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.10.0"
    }
    http = {
      source = "hashicorp/http"
    }
  }
}
