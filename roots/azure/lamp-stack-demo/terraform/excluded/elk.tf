#resource "azurerm_virtual_network" "elk-vn" {
#name                = "${local.stack-color}-elk-net"
#address_space       = ["10.2.0.0/16"]
#location            = "westus"
#resource_group_name = azurerm_resource_group.rg.name
#tags                = local.common_tags
#}

#resource "azurerm_virtual_network_peering" "elk-to-vn" {
#name                      = "${local.stack-color}-net-to-elk"
#resource_group_name       = azurerm_resource_group.rg.name
#virtual_network_name      = azurerm_virtual_network.vn.name
#remote_virtual_network_id = azurerm_virtual_network.elk-vn.id
#}
#resource "azurerm_virtual_network_peering" "vn-to-elk" {
#name                      = "elk-to-${local.stack-color}-net"
#resource_group_name       = azurerm_resource_group.rg.name
#virtual_network_name      = azurerm_virtual_network.elk-vn.name
#remote_virtual_network_id = azurerm_virtual_network.vn.id
#}
#resource "azurerm_subnet" "e" {
#name                 = "${local.stack-color}-elk-subnet"
#resource_group_name  = azurerm_resource_group.rg.name
#virtual_network_name = azurerm_virtual_network.elk-vn.name
#address_prefixes     = ["10.2.0.0/24"]
#}
