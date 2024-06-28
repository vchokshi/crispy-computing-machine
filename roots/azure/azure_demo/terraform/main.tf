resource "azurerm_resource_group" "rg" {
  name     = "${local.stack-color}-rg"
  provider = azurerm.iot4
  location = "westus"

  tags = local.common_tags
}

resource "azurerm_virtual_network" "vn" {
  provider            = azurerm.iot4
  name                = "${local.stack-color}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags                = local.common_tags
}

resource "azurerm_subnet" "s" {
  provider             = azurerm.iot4
  name                 = "${local.stack-color}-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vn.name
  address_prefixes     = ["10.0.0.0/24"]
}

resource "azurerm_network_security_group" "nsg" {
  provider            = azurerm.iot4
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
    #source_address_prefix      = "0.0.0.0/0"
    source_address_prefix = chomp(data.http.myip.body)
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
    name                   = "HTTP_80"
    priority               = 1003
    direction              = "Inbound"
    access                 = "Allow"
    protocol               = "Tcp"
    source_port_range      = "*"
    destination_port_range = "80"
    #tfsec:ignore:azure-network-no-public-ingress
    source_address_prefix      = "0.0.0.0/0"
    destination_address_prefix = "AzureLoadBalancer"
  }

}

#resource "azurerm_network_security_group" "web_nsg" {
#provider            = azurerm.iot4
#name                = "${local.stack-color}-web-nsg"
#location            = azurerm_resource_group.rg.location
#resource_group_name = azurerm_resource_group.rg.name

#security_rule {
#name                   = "HTTP_80"
#priority               = 1003
#direction              = "Inbound"
#access                 = "Allow"
#protocol               = "Tcp"
#source_port_range      = "*"
#destination_port_range = "80"
#tfsec:ignore:azure-network-no-public-ingress
#source_address_prefix = "0.0.0.0/0"
#destination_address_prefix = "AzureLoadBalancer"
#}
#}

resource "azurerm_availability_set" "azaz" {
  provider                     = azurerm.iot4
  name                         = "${local.stack-color}-availability-set"
  location                     = azurerm_resource_group.rg.location
  resource_group_name          = azurerm_resource_group.rg.name
  platform_fault_domain_count  = 2
  platform_update_domain_count = 2
  tags                         = local.common_tags
}

resource "azurerm_subnet_network_security_group_association" "nsg_ass" {
  provider                  = azurerm.iot4
  subnet_id                 = azurerm_subnet.s.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}

resource "azurerm_network_interface_security_group_association" "nsg_ass_jump" {
  provider                  = azurerm.iot4
  network_interface_id      = azurerm_network_interface.nic.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}
