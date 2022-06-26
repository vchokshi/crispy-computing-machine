terraform {
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/master/global.tfstate"
    region = "us-east-1"
  }
}


