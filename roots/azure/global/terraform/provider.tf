terraform {
  required_providers {
  }
  backend "s3" {
  bucket = "iot4-tfstate"
  key    = "roots/azure/global.tfstate"
  region = "us-east-1"
  }
}

provider "azurerm" {
  features {}
}

provider "aws" {}
