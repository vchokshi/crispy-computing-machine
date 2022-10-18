data "azurerm_subscription" "current" {}

output "azurerm_subscription" {
  value = data.azurerm_subscription.current
}

data "azurerm_subscriptions" "available" {}

output "available_subscriptions" {
  value = data.azurerm_subscriptions.available.subscriptions
}

resource "azurerm_subscription" "mfs" {
  alias             = "my_first_subscription"
  subscription_name = "IOT4 Subscription"
  subscription_id   = data.azurerm_subscription.current.subscription_id
}

resource "azurerm_management_group" "iot4" {
  display_name = "Proper"
  subscription_ids = [
    data.azurerm_subscription.current.subscription_id,
  ]
}

resource "azurerm_management_group" "elastio" {
  display_name               = "elastio"
  parent_management_group_id = azurerm_management_group.iot4.id
  #subscription_ids           = ["8af8c8f4-64de-43c8-9866-cab37692a0a5"]
}

resource "azurerm_management_group" "asu" {
  display_name               = "asu"
  parent_management_group_id = azurerm_management_group.iot4.id
  #subscription_ids           = ["52c3bf69-8878-40ca-9e80-7358298b2f30"]
}

resource "azurerm_consumption_budget_subscription" "asu" {
  name            = "asu consumption budget"
  subscription_id = "/subscriptions/52c3bf69-8878-40ca-9e80-7358298b2f30"

  amount     = 10
  time_grain = "Monthly"

  time_period {
    start_date = "2022-10-01T00:00:00Z"
  }
  notification {
    enabled        = false
    threshold      = 100.0
    operator       = "GreaterThan"
    threshold_type = "Forecasted"

    contact_emails = [
      "vc@iot4.net"
    ]
  }
}
resource "azurerm_consumption_budget_subscription" "conn" {
  name            = "connectivity consumption budget"
  subscription_id = "/subscriptions/0b008a7a-8d40-4b4e-a4bd-23cc5c8e2a9a"

  amount     = 10
  time_grain = "Monthly"

  time_period {
    start_date = "2022-10-01T00:00:00Z"
  }
  notification {
    enabled        = false
    threshold      = 90.0
    operator       = "GreaterThan"
    threshold_type = "Forecasted"

    contact_emails = [
      "vc@iot4.net"
    ]
  }
}
resource "azurerm_consumption_budget_subscription" "iot" {
  name            = "iot consumption budget"
  subscription_id = "/subscriptions/91b21a5a-e370-45ba-9bf5-5ac16e47c937"
  amount          = 10
  time_grain      = "Monthly"

  time_period {
    start_date = "2022-10-01T00:00:00Z"
  }
  notification {
    enabled        = false
    threshold      = 80.0
    operator       = "GreaterThan"
    threshold_type = "Forecasted"

    contact_emails = [
      "vc@iot4.net"
    ]
  }
}

