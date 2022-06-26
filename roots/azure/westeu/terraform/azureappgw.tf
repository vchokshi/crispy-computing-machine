resource "azurerm_resource_group" "rg" {
  provider = azurerm.asu
  name     = "azure-webapp-resources"
  location = "West Europe"
}

resource "azurerm_virtual_network" "vn" {
  provider            = azurerm.asu
  name                = "azure-webapp-network"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  address_space       = ["10.254.0.0/16"]
}

resource "azurerm_service_plan" "sp" {
  provider            = azurerm.asu
  name                = "azure-webapp-service-plan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "P1v2"

}

resource "azurerm_linux_web_app" "resume" {
  provider            = azurerm.asu
  name                = "week-13-app-stack"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_service_plan.sp.location
  service_plan_id     = azurerm_service_plan.sp.id

  site_config {
    application_stack {
      docker_image     = "cyberxsecurity/project1-apachewebserver"
      docker_image_tag = "latest"
    }
  }
}

resource "azurerm_app_service_custom_hostname_binding" "cv" {
  provider            = azurerm.asu
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

resource "azurerm_key_vault" "kv" {
  provider                    = azurerm.asu
  name                        = "azure-webapp-key-vault"
  location                    = azurerm_resource_group.rg.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    certificate_permissions = ["Get", "Import", "List"]
  }
}


#resource "azurerm_key_vault_certificate" "kvc" {
#provider     = azurerm.asu
#name         = "azure-webapp-vault-cert"
#key_vault_id = azurerm_key_vault.kv.id
#
#certificate {
#contents = filebase64("certificate.pfx")
#password = "derp"
#}
#
#certificate_policy {
#issuer_parameters {
#name = "Unknown"
#}
#
#key_properties {
#exportable = true
#key_size   = 2048
#key_type   = "RSA"
#reuse_key  = false
#}
#
#secret_properties {
#content_type = "application/x-pkcs12"
#}
#}
#
#}


#resource "azurerm_app_service_certificate" "cv" {
#provider            = azurerm.asu
#name                = "cv-cert"
#resource_group_name = azurerm_resource_group.rg.name
#location            = azurerm_resource_group.rg.location
#key_vault_secret_id = azurerm_key_vault_certificate.kvc.secret_id
#}
