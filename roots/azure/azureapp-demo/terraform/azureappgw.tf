resource "azurerm_resource_group" "rg" {
  provider = azurerm.iot4
  name     = "azure-webapp-resources"
  location = "West Europe"
}

resource "azurerm_virtual_network" "vn" {
  provider            = azurerm.iot4
  name                = "azure-webapp-network"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  address_space       = ["10.254.0.0/16"]
}

resource "azurerm_service_plan" "sp" {
  provider            = azurerm.iot4
  name                = "azure-webapp-service-plan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "P1v2"

}

resource "azurerm_linux_web_app" "resume" {
  provider            = azurerm.iot4
  name                = "week-13-app-stack"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_service_plan.sp.location
  service_plan_id     = azurerm_service_plan.sp.id
  https_only          = true

  site_config {
    application_stack {
      docker_image     = "vchokshi/www"
      docker_image_tag = "latest"
    }
  }
}

resource "azurerm_app_service_custom_hostname_binding" "cv" {
  provider            = azurerm.iot4
  hostname            = "cv.az.iot4.net"
  app_service_name    = azurerm_linux_web_app.resume.name
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_dns_txt_record" "cv" {
  provider            = azurerm.iot4
  name                = "asuid.cv"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  record {
    value = azurerm_linux_web_app.resume.custom_domain_verification_id
  }
}

locals {
  target_ip = element(azurerm_linux_web_app.resume.outbound_ip_address_list, length(azurerm_linux_web_app.resume.outbound_ip_address_list) - 1)
}

output "url" {
  value = "http://cv.az.iot4.net"
}
output "target" {
  value = local.target_ip
}
resource "azurerm_dns_a_record" "cv" {
  provider            = azurerm.iot4
  name                = "cv"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  records             = [local.target_ip]
}
