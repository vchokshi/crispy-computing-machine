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
  admin_username = "vchokshi"
  admin_ssh_key {
    username   = "vchokshi"
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


