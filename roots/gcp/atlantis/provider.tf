provider "google" {
  project = "lustrous-walker-297222"
  region  = "us-central1"
  zone    = "us-central1-c"
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }

  }
  backend "azurerm" {
    resource_group_name  = "gcpTFResourceGroup"
    storage_account_name = "gcptfstoracct"
    container_name       = "tfstateblob"
    key                  = "roots/gcp/regional.tfstate"
  }
}
