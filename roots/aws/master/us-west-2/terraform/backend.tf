terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/aws/us-west-2/iot4.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }
}
