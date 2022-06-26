data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}

data "azurerm_resource_group" "global" {
  provider = azurerm.iot4
  name     = "globals-rg"
}

data "azurerm_dns_zone" "iot4" {
  provider            = azurerm.iot4
  name                = "az.iot4.net"
  resource_group_name = data.azurerm_resource_group.global.name

}
