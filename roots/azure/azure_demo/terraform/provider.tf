provider "aws" {}

terraform {
  required_providers {
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/azure/useast.tfstate"
    region = "us-east-1"
  }
}

provider "azurerm" {
  features {}
  alias           = "iot4"
  subscription_id = "91b21a5a-e370-45ba-9bf5-5ac16e47c937"
}
provider "azurerm" {
  features {}
  subscription_id = "52c3bf69-8878-40ca-9e80-7358298b2f30"
  alias           = "asu"
}

provider "azurerm" {
  features {}
  alias           = "elastio"
  subscription_id = "8af8c8f4-64de-43c8-9866-cab37692a0a5"
}
