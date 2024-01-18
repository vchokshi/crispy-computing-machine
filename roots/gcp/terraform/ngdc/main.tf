provider "google" {
  project = "globals-408419"
  alias   = "global"
  region  = "us-central1"
  zone    = "us-central1-c"
}
provider "google" {
  project = "ngdc-project-id"
  region  = "us-west1"
  zone    = "us-west1-c"
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.8.0"

    }
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }

  }
  backend "azurerm" {
    resource_group_name  = "gcpTFResourceGroup"
    storage_account_name = "gcptfstoracct"
    container_name       = "tfstateblob"
    key                  = "roots/gcp/ngdc.tfstate"
  }
}

locals {
  base_apis = [
    "compute.googleapis.com",
    "container.googleapis.com",
    "monitoring.googleapis.com",
    "cloudtrace.googleapis.com",
    "cloudprofiler.googleapis.com"

  ]
  memorystore_apis = ["redis.googleapis.com"]
}

module "enable_google_apis" {
  source                      = "terraform-google-modules/project-factory/google//modules/project_services"
  version                     = "~> 14.0"
  project_id                  = var.gcp_project_id
  disable_services_on_destroy = true
  activate_apis               = concat(local.base_apis, var.memorystore ? local.memorystore_apis : [])
}

resource "google_compute_network" "vpc_network" {
  name                    = "gcp-vpc"
  auto_create_subnetworks = false
  mtu                     = 1460
}

#tfsec:ignore:google-compute-enable-vpc-flow-logs
resource "google_compute_subnetwork" "default" {
  name          = "gcp-subnet"
  ip_cidr_range = "10.0.2.0/24"
  region        = "us-central1"
  network       = google_compute_network.vpc_network.id
}

resource "google_compute_firewall" "ssh" {
  name = "allow-ssh"
  allow {
    ports    = ["22"]
    protocol = "tcp"
  }
  direction = "INGRESS"
  network   = google_compute_network.vpc_network.id
  priority  = 1000
  #tfsec:ignore:google-compute-no-public-ingress
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["ssh"]
}
