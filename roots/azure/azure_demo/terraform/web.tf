resource "azurerm_network_interface" "web_nic" {
  provider            = azurerm.iot4
  count               = 2
  name                = "${local.stack-color}-web-net-${count.index}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "${local.stack-color}-web-nic-${count.index}-config"
    subnet_id                     = azurerm_subnet.s.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_linux_virtual_machine" "web" {
  provider              = azurerm.iot4
  count                 = 2
  name                  = "${local.stack-color}-web-${count.index}"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  network_interface_ids = [element(azurerm_network_interface.web_nic.*.id, count.index)]
  size                  = "Standard_B1s"

  admin_username = "vchokshi"
  admin_ssh_key {
    username   = "vchokshi"
    public_key = file("./../id_rsa.pub")
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
  availability_set_id = azurerm_availability_set.azaz.id
  tags                = local.common_tags
}

output "web_ips" {
  value = azurerm_linux_virtual_machine.web.*.private_ip_address
}


resource "azurerm_network_interface_security_group_association" "nsg_ass_web" {
  count                     = 2
  provider                  = azurerm.iot4
  network_interface_id      = azurerm_network_interface.web_nic[count.index].id
  network_security_group_id = azurerm_network_security_group.nsg.id
}
