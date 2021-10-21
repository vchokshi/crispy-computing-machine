resource "azurerm_public_ip" "elk_ip" {
  name                = "${local.stack-color}-elk-ip"
  location            = "westus"
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Dynamic"
  tags                = local.common_tags
}

resource "azurerm_network_interface" "elk_nic" {
  name                = "${local.stack-color}-elk-nic"
  location            = "westus"
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "${local.stack-color}-elk-nic-config"
    subnet_id                     = azurerm_subnet.e.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.elk_ip.id
  }
}

resource "azurerm_linux_virtual_machine" "elk" {
  name                  = "${local.stack-color}-elk"
  location              = "westus"
  resource_group_name   = azurerm_resource_group.rg.name
  network_interface_ids = [azurerm_network_interface.elk_nic.id]
  size                  = "Standard_DS3_v2"

  admin_username = "vchokshi"
  admin_ssh_key {
    username   = "vchokshi"
    public_key = file("../id_rsa.pub")
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


output "elk_private_ip" {
  value = azurerm_linux_virtual_machine.elk.private_ip_address
}
output "elk_public_ip" {
  value = "http://${azurerm_linux_virtual_machine.elk.public_ip_address}:5601/app/kibana"
}
