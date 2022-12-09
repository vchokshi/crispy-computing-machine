terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0.2"
      configuration_aliases = [
        azurerm.connectivity,
        azurerm.management
      ]
    }
    azuread = {
      source  = "hashicorp/azuread"
      version = "~> 2.7.0"

    }
  }
  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/azure/global.tfstate"
    region = "us-east-1"
  }

}

provider "azurerm" {
  alias           = "identity"
  subscription_id = "031e77c5-ae17-4124-ae68-d85cf9849112"
  features {}
}
provider "azurerm" {
  alias           = "management"
  subscription_id = "ba600cd7-0d5d-488c-99fd-59eb5ac00da7"
  features {}
}
provider "azurerm" {
  alias           = "connectivity"
  subscription_id = "0b008a7a-8d40-4b4e-a4bd-23cc5c8e2a9a"
  features {}
}
provider "azurerm" {
  subscription_id = "91b21a5a-e370-45ba-9bf5-5ac16e47c937"
  features {
    api_management {
      purge_soft_delete_on_destroy = true
    }

    application_insights {
      disable_generated_rule = false
    }

    cognitive_account {
      purge_soft_delete_on_destroy = true
    }

    key_vault {
      purge_soft_delete_on_destroy    = true
      recover_soft_deleted_key_vaults = true
    }

    log_analytics_workspace {
      permanently_delete_on_destroy = true
    }

    resource_group {
      prevent_deletion_if_contains_resources = true
    }

    template_deployment {
      delete_nested_items_during_deletion = true
    }

    virtual_machine {
      delete_os_disk_on_deletion     = true
      graceful_shutdown              = false
      skip_shutdown_and_force_delete = false
    }

    virtual_machine_scale_set {
      force_delete                  = false
      roll_instances_when_required  = true
      scale_to_zero_before_deletion = true
    }

  }
}

provider "aws" {}
