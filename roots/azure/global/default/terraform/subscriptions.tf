data "azurerm_subscription" "current" {}

data "azurerm_subscriptions" "available" {}

resource "azurerm_subscription" "mfs" {
  alias             = "my_first_subscription"
  subscription_name = "IOT4 Subscription"
  subscription_id   = data.azurerm_subscription.current.subscription_id
}
