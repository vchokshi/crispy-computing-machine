provider "aws" {}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
      #version = ">=2.28.1"
    }
    http = {
      source = "hashicorp/http"
    }
  }
  required_version = ">= 0.13"
}
# use terraform version 0.13.0
