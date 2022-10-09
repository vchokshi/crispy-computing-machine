resource "azurerm_public_ip" "lb_public_ip" {
  provider            = azurerm.elastio
  name                = "${local.stack-color}-lb-ip"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags                = local.common_tags
  allocation_method   = "Dynamic"
}

output "lb-public-ip" {
  value = azurerm_public_ip.lb_public_ip.ip_address
}

resource "azurerm_lb" "lb" {
  provider            = azurerm.elastio
  name                = "${local.stack-color}-lb"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  frontend_ip_configuration {
    name                 = "${local.stack-color}-frontend-ip-config"
    public_ip_address_id = azurerm_public_ip.lb_public_ip.id
  }
}

resource "azurerm_dns_a_record" "dvwa" {
  provider            = azurerm.iot4
  name                = "dvwa"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  records             = [azurerm_public_ip.lb_public_ip.ip_address]
}
resource "azurerm_dns_a_record" "apache" {
  provider            = azurerm.iot4
  name                = "apache"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  records             = [azurerm_public_ip.lb_public_ip.ip_address]
}

resource "azurerm_dns_a_record" "resume" {
  provider            = azurerm.iot4
  name                = "resume"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  records             = [azurerm_public_ip.lb_public_ip.ip_address]
}


output "apache" {
  value = "http://apache.${data.azurerm_dns_zone.iot4.name}"
}
output "dvwa_login" {
  value = "http://dvwa.${data.azurerm_dns_zone.iot4.name}:808/login.php"
}
output "resume" {
  value = "http://resume.${data.azurerm_dns_zone.iot4.name}:8080"
}


resource "azurerm_lb_backend_address_pool" "lb_backend_pool" {
  provider        = azurerm.elastio
  loadbalancer_id = azurerm_lb.lb.id
  name            = "${local.stack-color}-backend-address-pool"
}

resource "azurerm_lb_probe" "lb_probe" {
  provider        = azurerm.elastio
  loadbalancer_id = azurerm_lb.lb.id
  name            = "${local.stack-color}-lb-probe"
  port            = 80
}

resource "azurerm_lb_rule" "lb_rule" {
  provider                       = azurerm.elastio
  loadbalancer_id                = azurerm_lb.lb.id
  name                           = "${local.stack-color}-lb-rule"
  protocol                       = "Tcp"
  frontend_port                  = 80
  backend_port                   = 80
  frontend_ip_configuration_name = azurerm_lb.lb.frontend_ip_configuration[0].name
  probe_id                       = azurerm_lb_probe.lb_probe.id
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.lb_backend_pool.id]
}
resource "azurerm_lb_rule" "lb_rule_808" {
  provider                       = azurerm.elastio
  loadbalancer_id                = azurerm_lb.lb.id
  name                           = "${local.stack-color}-lb-rule-808"
  protocol                       = "Tcp"
  frontend_port                  = 808
  backend_port                   = 808
  frontend_ip_configuration_name = azurerm_lb.lb.frontend_ip_configuration[0].name
  probe_id                       = azurerm_lb_probe.lb_probe.id
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.lb_backend_pool.id]
}
resource "azurerm_lb_rule" "lb_rule_8080" {
  provider                       = azurerm.elastio
  loadbalancer_id                = azurerm_lb.lb.id
  name                           = "${local.stack-color}-lb-rule-8080"
  protocol                       = "Tcp"
  frontend_port                  = 8080
  backend_port                   = 8080
  frontend_ip_configuration_name = azurerm_lb.lb.frontend_ip_configuration[0].name
  probe_id                       = azurerm_lb_probe.lb_probe.id
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.lb_backend_pool.id]
}
