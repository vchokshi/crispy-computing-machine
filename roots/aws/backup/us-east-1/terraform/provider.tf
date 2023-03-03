provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "308948682972", #master
    "438513923646"  #this
  ]
}

#terraform {
#required_providers {
#}
#backend "s3" {
#bucket = "iot4-tfstate"
#key    = "roots/aws/us-east-1.tfstate"
#region = "us-east-1"
#}
#}
