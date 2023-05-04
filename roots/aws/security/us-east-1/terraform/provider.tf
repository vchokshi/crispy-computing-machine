provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "308948682972", #master
    "136483452582"  #this
  ]
}

terraform {
  required_providers {
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/security/us-east-1.tfstate"
    region = "us-east-1"
  }
}
