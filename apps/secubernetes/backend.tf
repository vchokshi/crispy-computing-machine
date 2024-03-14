terraform {
  backend "s3" {
    bucket  = "iot4-tfstate"
    key     = "roots/digitalocean/panoptica/do.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }
}
