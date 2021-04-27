resource "azurerm_resource_group" "rg" {
  name     = "${local.stack-color}-rg"
  location = "eastus"

  tags = local.common_tags
}

resource "azurerm_virtual_network" "vn" {
  name                = "${local.stack-color}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags                = local.common_tags
}

resource "azurerm_virtual_network" "elk-vn" {
  name                = "${local.stack-color}-elk-net"
  address_space       = ["10.2.0.0/16"]
  location            = "westus"
  resource_group_name = azurerm_resource_group.rg.name
  tags                = local.common_tags
}

resource "azurerm_virtual_network_peering" "elk-to-vn" {
  name                      = "${local.stack-color}-net-to-elk"
  resource_group_name       = azurerm_resource_group.rg.name
  virtual_network_name      = azurerm_virtual_network.vn.name
  remote_virtual_network_id = azurerm_virtual_network.elk-vn.id
}
resource "azurerm_virtual_network_peering" "vn-to-elk" {
  name                      = "elk-to-${local.stack-color}-net"
  resource_group_name       = azurerm_resource_group.rg.name
  virtual_network_name      = azurerm_virtual_network.elk-vn.name
  remote_virtual_network_id = azurerm_virtual_network.vn.id
}
resource "azurerm_subnet" "s" {
  name                 = "${local.stack-color}-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vn.name
  address_prefixes     = ["10.0.0.0/24"]
}
resource "azurerm_subnet" "e" {
  name                 = "${local.stack-color}-elk-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.elk-vn.name
  address_prefixes     = ["10.2.0.0/24"]
}


resource "azurerm_network_security_group" "nsg" {
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
    source_address_prefix      = azurerm_linux_virtual_machine.jumphost.private_ip_address
    destination_address_prefix = "VirtualNetwork"
  }
  security_rule {
    name                       = "HTTP"
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
    name                       = "HTTPKIB"
    priority                   = 1004
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "5601"
    source_address_prefix      = chomp(data.http.myip.body)
    destination_address_prefix = "*"
  }
  tags = local.common_tags
}

resource "azurerm_public_ip" "jump_ip" {
  name                = "${local.stack-color}-jump-ip"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Dynamic"
  tags                = local.common_tags
}

resource "azurerm_network_interface" "nic" {
  name                = "${local.stack-color}-nic"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "${local.stack-color}-nic-config"
    subnet_id                     = azurerm_subnet.s.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.jump_ip.id
 }
}

resource "azurerm_linux_virtual_machine" "jumphost" {
  name                = "${local.stack-color}-jump-box"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  size                = "Standard_B1ms"
  network_interface_ids = [
    azurerm_network_interface.nic.id
  ]
  admin_username = "vihar"
  admin_ssh_key {
    username   = "vihar"
    public_key = file("~/.ssh/id_rsa.pub")
  }
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
  tags = local.common_tags
}

output "jumphost_ip" {
  value = azurerm_linux_virtual_machine.jumphost.public_ip_address
}

resource "azurerm_availability_set" "azaz" {
  name                         = "${local.stack-color}-availability-set"
  location                     = azurerm_resource_group.rg.location
  resource_group_name          = azurerm_resource_group.rg.name
  platform_fault_domain_count  = 2
  platform_update_domain_count = 2
  tags                         = local.common_tags
}
