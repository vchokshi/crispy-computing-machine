resource "azurerm_public_ip" "lb_public_ip" {
  provider            = azurerm.asu
  name                = "${local.stack-color}-lb-ip"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Dynamic"
  tags                = local.common_tags
}

output "lb-public-ip" {
  value = azurerm_public_ip.lb_public_ip.ip_address
}
