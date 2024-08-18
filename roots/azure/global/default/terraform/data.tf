data "azurerm_client_config" "core" {}

data "azurerm_subscriptions" "mgmt" {
  display_name_contains = "Management"
}
output "management_subscription" {
  value = data.azurerm_subscriptions.mgmt.subscriptions[0].subscription_id
}
data "azuread_domains" "all" {
}
