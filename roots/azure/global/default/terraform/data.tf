data "azurerm_client_config" "core" {}

data "azurerm_subscriptions" "conn" {
  display_name_contains = "Lumen"
}
data "azuread_domains" "all" {
}
