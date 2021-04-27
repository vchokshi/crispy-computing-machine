terraform {
  backend "s3" {
    bucket  = "iot4-tf-state"
    key     = "terraform.tfstate"
    region  = "us-west-2"
    encrypt = "true"
    dynamodb_table = "iot4-terraform-lock"
  }
}