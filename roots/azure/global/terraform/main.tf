data "azurerm_client_config" "core" {}

module "enterprise_scale" {
  source  = "Azure/caf-enterprise-scale/azurerm"
  version = "2.4.0"

  disable_telemetry = true

  providers = {
    azurerm              = azurerm
    azurerm.connectivity = azurerm
    azurerm.management   = azurerm
  }
  root_parent_id            = data.azurerm_client_config.core.tenant_id
  root_id                   = var.root_id
  root_name                 = var.root_name
  deploy_demo_landing_zones = true
  library_path              = "${path.root}/lib"
  custom_landing_zones = {
    "${var.root_id}-global" = {
      display_name               = "${upper(var.root_id)} GLOBAL"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids           = []
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }
    "${var.root_id}-Imaging" = {
      display_name               = "${upper(var.root_id)} Imaging"
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
  subscription_id_connectivity  = "0b008a7a-8d40-4b4e-a4bd-23cc5c8e2a9a"
  deploy_identity_resources     = false
  subscription_id_identity      = "031e77c5-ae17-4124-ae68-d85cf9849112"
  deploy_management_resources   = false
  subscription_id_management    = "ba600cd7-0d5d-488c-99fd-59eb5ac00da7"
}

