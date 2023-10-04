resource "azurerm_resource_group" "rg" {
  provider = azurerm.iot4
  name     = "azure-webapp-final"
  location = "Japan East"
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
  sku_name            = "P2v2"

}

resource "azurerm_linux_web_app" "resume" {
  provider            = azurerm.iot4
  name                = "azure-web-app-stack"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_service_plan.sp.location
  service_plan_id     = azurerm_service_plan.sp.id
  https_only          = true

  #app_settings = {
  #WEBSITE_PORT = "8080"
  #}
  site_config {
    application_stack {
      docker_image = "vchokshi/www"
      #docker_image     = "webgoat/webgoat"
      docker_image_tag = "latest"
      #docker_image_name = "cyberxsecurity/project1-apachewebserver:latest"
    }
  }
}

locals {
  target_ip = element(azurerm_linux_web_app.resume.outbound_ip_address_list, length(azurerm_linux_web_app.resume.outbound_ip_address_list) - 1)
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
resource "azurerm_dns_txt_record" "cvv" {
  provider            = azurerm.iot4
  name                = "asuid.cvv"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  record {
    value = azurerm_linux_web_app.resume.custom_domain_verification_id
  }
}

resource "azurerm_dns_a_record" "cv" {
  provider            = azurerm.iot4
  name                = "cv"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  records             = [local.target_ip]
}

resource "azurerm_dns_cname_record" "cvv" {
  provider            = azurerm.iot4
  name                = "cvv"
  zone_name           = data.azurerm_dns_zone.iot4.name
  resource_group_name = data.azurerm_resource_group.global.name
  ttl                 = 300
  record              = azurerm_linux_web_app.resume.default_hostname

}

resource "azurerm_app_service_certificate" "cv" {
  depends_on          = [azurerm_key_vault.kv]
  provider            = azurerm.iot4
  name                = "cv-cert"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  key_vault_secret_id = azurerm_key_vault_certificate.kvc.secret_id
}

resource "azurerm_app_service_custom_hostname_binding" "cv" {
  depends_on          = [azurerm_dns_txt_record.cv, azurerm_app_service_certificate.cv]
  provider            = azurerm.iot4
  hostname            = "cv.az.iot4.net"
  app_service_name    = azurerm_linux_web_app.resume.name
  resource_group_name = azurerm_resource_group.rg.name
  ssl_state           = "SniEnabled"
  thumbprint          = azurerm_app_service_certificate.cv.thumbprint
}

resource "azurerm_app_service_custom_hostname_binding" "chb" {
  depends_on          = [azurerm_dns_txt_record.cvv, azurerm_dns_cname_record.cvv]
  provider            = azurerm.iot4
  hostname            = "cvv.az.iot4.net"
  app_service_name    = azurerm_linux_web_app.resume.name
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_app_service_managed_certificate" "mc" {
  provider                   = azurerm.iot4
  custom_hostname_binding_id = azurerm_app_service_custom_hostname_binding.chb.id
}

resource "azurerm_app_service_certificate_binding" "cvvb" {
  provider            = azurerm.iot4
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.chb.id
  certificate_id      = azurerm_app_service_managed_certificate.mc.id
  ssl_state           = "SniEnabled"

}

output "url-1" {
  value = azurerm_linux_web_app.resume.default_hostname
}
output "url-2" {
  value = "http://cv.az.iot4.net"
}
output "url-3" {
  value = "http://cvv.az.iot4.net"
}
output "target" {
  value = local.target_ip
}
