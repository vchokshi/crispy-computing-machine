output "azurerm_subscription" {
  value = data.azurerm_subscription.current
}

output "available_subscriptions" {
  value = data.azurerm_subscriptions.available.subscriptions
}
output "available_domains" {
  value = data.azuread_domains.all.domains
}
