data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}

data "azurerm_resource_group" "global" {
  name = "globals-rg"

}

output "id" {
  value = data.azurerm_resource_group.global.id
}

data "azurerm_dns_zone" "iot4" {
  name                = "az.iot4.net"
  resource_group_name = data.azurerm_resource_group.global.name

}

output "dns_zone_id" {
  value = data.azurerm_dns_zone.iot4.id

}
