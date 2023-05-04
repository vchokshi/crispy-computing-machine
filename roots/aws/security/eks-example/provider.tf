provider "aws" {
  alias = "east"
  allowed_account_ids = [
    "308948682972", #master
    "136483452582"  #this
  ]
}

