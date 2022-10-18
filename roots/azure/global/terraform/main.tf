data "azurerm_client_config" "core" {}

module "enterprise_scale" {
  source  = "Azure/caf-enterprise-scale/azurerm"
  version = "2.4.0"

  deploy_demo_landing_zones = true
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
    "${var.root_id}-Patient-Portal" = {
      display_name               = "Patient Portal"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids           = ["52c3bf69-8878-40ca-9e80-7358298b2f30"]
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }
    "${var.root_id}-Medical-Imaging" = {
      display_name               = "Medical Imaging"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids           = ["8af8c8f4-64de-43c8-9866-cab37692a0a5", "6cab8260-f42a-4f7a-b2d5-0c30580e5842", "f8d4031b-179a-425c-bbeb-91f269e0a710"]
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }

    "${var.root_id}-EPIC" = {
      display_name               = "EPIC"
      parent_management_group_id = "${var.root_id}-landing-zones"
      subscription_ids           = []
      archetype_config = {
        archetype_id   = "customer_online"
        parameters     = {}
        access_control = {}
      }
    }
    "${var.root_id}-Cerner" = {
      display_name               = "Cerner"
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
  deploy_connectivity_resources = true
  subscription_id_connectivity  = "0b008a7a-8d40-4b4e-a4bd-23cc5c8e2a9a"
  deploy_identity_resources     = true
  subscription_id_identity      = "031e77c5-ae17-4124-ae68-d85cf9849112"
  deploy_management_resources   = true
  subscription_id_management    = "ba600cd7-0d5d-488c-99fd-59eb5ac00da7"
}
