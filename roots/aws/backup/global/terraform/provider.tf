provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "308948682972", #master
    "438513923646"  #this
  ]
}
