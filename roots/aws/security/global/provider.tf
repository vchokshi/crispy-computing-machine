provider "aws" {
  region = "us-east-1"
  allowed_account_ids = [
    "308948682972", #master
    "136483452582"  #this
  ]
}
