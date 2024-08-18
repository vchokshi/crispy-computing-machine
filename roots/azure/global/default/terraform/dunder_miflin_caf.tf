variable "dm_root_id" {
  type    = string
  default = "DM"
}

variable "dm_root_name" {
  type    = string
  default = "Dunder Mifflin"
}

variable "dm_default_location" {
  type    = string
  default = "westus"
}
module "dm_enterprise_scale" {
  source  = "Azure/caf-enterprise-scale/azurerm"
  version = "6.0.0"
  #version = "2.4.0"

  deploy_demo_landing_zones   = false
  disable_telemetry           = true
  deploy_management_resources = false
  #subscription_id_management = data.azurerm_client_config.core.subscription_id
  subscription_id_management = data.azurerm_subscriptions.mgmt.subscriptions[0].subscription_id
  default_location           = var.dm_default_location

  root_parent_id = data.azurerm_client_config.core.tenant_id
  root_id        = var.dm_root_id
  root_name      = var.dm_root_name

  library_path = "${path.root}/lib"

  custom_landing_zones = {
    "${var.dm_root_id}-online-example-1" = {
      display_name               = "${upper(var.dm_root_id)} Online Example Policy Inheritance"
      parent_management_group_id = "${var.dm_root_id}-landing-zones"
      subscription_ids           = []
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}

      }

    }
    "${var.dm_root_id}-online-example-2" = {
      display_name               = "${upper(var.dm_root_id)} eastusonly"
      parent_management_group_id = "${var.dm_root_id}-landing-zones"
      subscription_ids           = []
      archetype_config = {
        archetype_id = "customer_online"
        parameters = {
          Deny-Resource-Locations = {
            listOfAllowedLocations = ["eastus", ]

          }
          Deny-RSG-Locations = {
            listOfAllowedLocations = ["eastus", ]

          }

        }
        access_control = {}

      }

    }

  }

  providers = {
    azurerm              = azurerm
    azurerm.connectivity = azurerm
    azurerm.management   = azurerm
  }
  deploy_connectivity_resources = false
}
