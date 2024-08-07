data "azurerm_client_config" "core" {}

data "azurerm_subscriptions" "conn" {
  display_name_contains = "Connectivity"
}
output "connection_subscription" {
  value = data.azurerm_subscriptions.conn.subscriptions[0].subscription_id
}
data "azuread_domains" "all" {
}
