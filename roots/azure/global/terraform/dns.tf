resource "azurerm_resource_group" "globals" {
  name     = "globals-rg"
  location = "eastus"

  tags = local.common_tags
}

resource "azurerm_dns_zone" "iot4" {
  name                = "az.iot4.net"
  resource_group_name = azurerm_resource_group.globals.name

}
