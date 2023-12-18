provider "google" {
  project = "globals-408419"
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
    key                  = "roots/gcp/global.tfstate"
  }
}

#tfsec:ignore:google-dns-enable-dnssec
resource "google_dns_managed_zone" "publiczone" {
  name        = "iot4zone"
  dns_name    = "gcp.iot4.net."
  description = "IOT4 Delegated Zone"
  visibility  = "public"
  cloud_logging_config {
    enable_logging = false
  }
  project = "globals-408419"
}

#tfsec:ignore:google-dns-enable-dnssec
resource "google_dns_managed_zone" "gkezone" {
  name        = "iot4gkezone"
  dns_name    = "gke.iot4.net."
  description = "IOT4 GKE Delegated Zone"
  visibility  = "public"
  cloud_logging_config {
    enable_logging = false
  }
  project = "globals-408419"
}

#tfsec:ignore:google-iam-no-default-network
resource "google_project" "ngdc2" {
  name       = "The NEW NGDC Project"
  project_id = "ngdc-project-id"

}

output "ngdc_project_id" {
  value = google_project.ngdc2.id
}

output "ngdc_project_number" {
  value = google_project.ngdc2.number
}
