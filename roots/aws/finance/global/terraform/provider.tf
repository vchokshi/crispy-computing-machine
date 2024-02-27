provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    #"308948682972", #master
    "375423940384" #finance
  ]
}
terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/aws/finance/global.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }
}
