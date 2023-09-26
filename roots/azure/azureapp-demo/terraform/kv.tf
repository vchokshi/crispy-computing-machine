resource "azurerm_key_vault" "kv" {
  provider = azurerm.iot4
  ## You can try to create this in azurem.asu to prove CAF policies work
  #provider                    = azurerm.asu
  name                        = "azure-webapp-key-vault"
  location                    = azurerm_resource_group.rg.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  #tfsec:ignore:azure-keyvault-no-purge
  purge_protection_enabled = false
  network_acls {
    bypass         = "AzureServices"
    default_action = "Deny"

  }

  sku_name = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    certificate_permissions = ["Get", "Import", "List", "Delete", "Purge"]
    key_permissions         = ["Get", "Import", "List", "Delete", "Purge"]
  }
}

data "azuread_service_principal" "web_app_resource_provider" {
  application_id = "abfa0a7c-a6b6-4736-8310-5855508787cd"
}

resource "azurerm_key_vault_access_policy" "web_app_resource_provider" {
  provider     = azurerm.iot4
  key_vault_id = azurerm_key_vault.kv.id

  tenant_id = data.azurerm_client_config.current.tenant_id
  object_id = data.azuread_service_principal.web_app_resource_provider.id

  secret_permissions = [
    "Get"
  ]

  certificate_permissions = [
    "Get"
  ]

}

resource "azurerm_key_vault_certificate" "kvc" {
  provider     = azurerm.iot4
  name         = "azure-webapp-vault-cert"
  key_vault_id = azurerm_key_vault.kv.id

  certificate {
    contents = filebase64("project1_cert.pfx")
    password = "password"
  }

  certificate_policy {
    issuer_parameters {
      name = "Unknown"
    }

    key_properties {
      exportable = true
      key_size   = 2048
      key_type   = "RSA"
      reuse_key  = false
    }

    secret_properties {
      content_type = "application/x-pkcs12"
    }
  }

}


resource "azurerm_app_service_certificate" "cv" {
  provider            = azurerm.iot4
  name                = "cv-cert"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  key_vault_secret_id = azurerm_key_vault_certificate.kvc.secret_id

}
