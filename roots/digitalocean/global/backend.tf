terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/digitalocean/global/global.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }
}
