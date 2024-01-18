terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/aws/master/us-west-2.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }
}
