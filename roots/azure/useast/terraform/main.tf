resource "azurerm_resource_group" "rg" {
  name     = "${local.stack-color}-rg"
  provider = azurerm.asu
  location = "eastus"

  tags = local.common_tags
}

resource "azurerm_virtual_network" "vn" {
  provider            = azurerm.asu
  name                = "${local.stack-color}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags                = local.common_tags
}

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
resource "azurerm_subnet" "s" {
  provider             = azurerm.asu
  name                 = "${local.stack-color}-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vn.name
  address_prefixes     = ["10.0.0.0/24"]
}
#resource "azurerm_subnet" "e" {
#name                 = "${local.stack-color}-elk-subnet"
#resource_group_name  = azurerm_resource_group.rg.name
#virtual_network_name = azurerm_virtual_network.elk-vn.name
#address_prefixes     = ["10.2.0.0/24"]
#}


resource "azurerm_network_security_group" "nsg" {
  provider            = azurerm.asu
  name                = "${local.stack-color}-nsg"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  security_rule {
    name                       = "SSH"
    priority                   = 1001
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    destination_address_prefix = "*"
    source_address_prefix      = chomp(data.http.myip.body)
  }
  security_rule {
    name                       = "SSH-Internal"
    priority                   = 1002
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "10.0.0.0/24"
    destination_address_prefix = "VirtualNetwork"
  }
  security_rule {
    name                       = "HTTP_80"
    priority                   = 1003
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80"
    source_address_prefix      = chomp(data.http.myip.body)
    destination_address_prefix = "AzureLoadBalancer"
  }
  security_rule {
    name                       = "HTTP_808"
    priority                   = 1004
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "808"
    source_address_prefix      = chomp(data.http.myip.body)
    destination_address_prefix = "AzureLoadBalancer"
  }
  security_rule {
    name                       = "HTTP_8080"
    priority                   = 1005
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "8080"
    source_address_prefix      = chomp(data.http.myip.body)
    destination_address_prefix = "AzureLoadBalancer"
  }

  #security_rule {
  #name                   = "HTTPKIB"
  #priority               = 1004
  #direction              = "Inbound"
  #access                 = "Allow"
  #protocol               = "Tcp"
  #source_port_range      = "*"
  #destination_port_range = "5601"
  ##source_address_prefix      = chomp(data.http.myip.body)
  #source_address_prefix      = "0.0.0.0"
  #destination_address_prefix = "*"
  #}
  #tags = local.common_tags
}

resource "azurerm_availability_set" "azaz" {
  provider                     = azurerm.asu
  name                         = "${local.stack-color}-availability-set"
  location                     = azurerm_resource_group.rg.location
  resource_group_name          = azurerm_resource_group.rg.name
  platform_fault_domain_count  = 2
  platform_update_domain_count = 2
  tags                         = local.common_tags
}
