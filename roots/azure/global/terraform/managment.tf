data "azurerm_subscription" "current" {}

output "azurerm_subscription" {
  value = data.azurerm_subscription.current
}

data "azurerm_subscriptions" "available" {}

output "available_subscriptions" {
  value = data.azurerm_subscriptions.available.subscriptions
}

output "first_available_subscription_display_name" {
  value = data.azurerm_subscriptions.available.subscriptions[0].display_name

}

resource "azurerm_subscription" "mfs" {
  alias             = "my_first_subscription"
  subscription_name = "IOT4 Subscription"
  subscription_id   = data.azurerm_subscription.current.subscription_id
}

resource "azurerm_management_group" "iot4" {
  display_name = "iot4"
  subscription_ids = [
    data.azurerm_subscription.current.subscription_id,
  ]
}

resource "azurerm_management_group" "elastio" {
  display_name               = "elastio"
  parent_management_group_id = azurerm_management_group.iot4.id
  subscription_ids = [
    data.azurerm_subscriptions.available.subscriptions[1].subscription_id
  ]
}

resource "azurerm_management_group" "asu" {
  display_name               = "asu"
  parent_management_group_id = azurerm_management_group.iot4.id
  subscription_ids = [
    data.azurerm_subscriptions.available.subscriptions[0].subscription_id
  ]
}
