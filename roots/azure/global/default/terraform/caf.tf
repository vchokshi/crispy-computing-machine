variable "root_id" {
  type    = string
  default = "VUMC"
}

variable "root_name" {
  type    = string
  default = "VUMC"
}

module "enterprise_scale" {
  source  = "Azure/caf-enterprise-scale/azurerm"
  version = "2.4.0"

  deploy_demo_landing_zones = false
  disable_telemetry         = true

  root_parent_id = data.azurerm_client_config.core.tenant_id
  root_id        = var.root_id
  root_name      = var.root_name

  providers = {
    azurerm              = azurerm
    azurerm.connectivity = azurerm.connectivity
    azurerm.management   = azurerm.management
  }
  library_path = "${path.root}/lib"
  custom_landing_zones = {
    "${var.root_id}-VMS" = {
      display_name               = "Visitor Management Systems"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids = [
        data.azurerm_subscriptions.veristream.subscriptions[0].subscription_id
      ]
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }
    "${var.root_id}-PACS" = {
      display_name               = "Medical Imaging"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids = [
        data.azurerm_subscriptions.intellispace.subscriptions[0].subscription_id,
        data.azurerm_subscriptions.omegaai.subscriptions[0].subscription_id,
      ]
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }

    "${var.root_id}-EDW" = {
      display_name               = "Enterprise Data Warehouse"
      parent_management_group_id = "${var.root_id}-platform"
      subscription_ids = [
        data.azurerm_subscriptions.databricks.subscriptions[0].subscription_id
      ]
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }
    "${var.root_id}-EMR" = {
      display_name               = "Electronic Medical Records"
      parent_management_group_id = "${var.root_id}-landing-zones"
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
  deploy_connectivity_resources = false
  subscription_id_connectivity  = data.azurerm_subscriptions.conn.subscriptions[0].subscription_id

  deploy_identity_resources = false
  subscription_id_identity  = data.azurerm_subscriptions.id.subscriptions[0].subscription_id

  deploy_management_resources = false
  subscription_id_management  = data.azurerm_subscriptions.mgmt.subscriptions[0].subscription_id
}
