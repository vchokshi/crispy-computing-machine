/*resource "azurerm_consumption_budget_subscription" "asu" {
  name            = "Consumption_Budget"
  subscription_id = "/subscriptions/52c3bf69-8878-40ca-9e80-7358298b2f30"

  amount     = 10
  time_grain = "Monthly"

  time_period {
    start_date = "2022-12-01T00:00:00Z"
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
*/
resource "azurerm_consumption_budget_subscription" "conn" {
  name            = "Consumption_Budget"
  subscription_id = "/subscriptions/0b008a7a-8d40-4b4e-a4bd-23cc5c8e2a9a"

  amount     = 10
  time_grain = "Monthly"

  time_period {
    start_date = "2024-08-01T00:00:00Z"
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
  name            = "Consumption_Budget"
  subscription_id = "/subscriptions/91b21a5a-e370-45ba-9bf5-5ac16e47c937"
  amount          = 10
  time_grain      = "Monthly"

  time_period {
    start_date = "2024-08-01T00:00:00Z"
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
