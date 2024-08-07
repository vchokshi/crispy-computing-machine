variable "root_id" {
  type    = string
  default = "SHI"
}

variable "root_name" {
  type    = string
  default = "Stratascale"
}

variable "default_location" {
  type    = string
  default = "eastus"
}
module "enterprise_scale" {
  source  = "Azure/caf-enterprise-scale/azurerm"
  version = "6.0.0"
  #version = "2.4.0"

  deploy_demo_landing_zones = true
  disable_telemetry         = true
  default_location          = var.default_location

  root_parent_id = data.azurerm_client_config.core.tenant_id
  root_id        = var.root_id
  root_name      = var.root_name

  providers = {
    azurerm              = azurerm
    azurerm.connectivity = azurerm
    azurerm.management   = azurerm
  }
  deploy_connectivity_resources = false
}

data "azurerm_management_group" "conn" {
  name = "SHI-connectivity"
}

output "connectivity_management_group" {
  value = data.azurerm_management_group.conn.id
}
#resource "azurerm_management_group_subscription_association" "conn" {
#management_group_id = data.azurerm_management_group.conn.id
#subscription_id     = data.azurerm_subscriptions.conn.subscriptions[0].subscription_id
#}

