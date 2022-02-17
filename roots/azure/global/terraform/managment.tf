data "azurerm_subscription" "current" {}

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
    data.azurerm_subscription.current.subscription_id,

  ]

}
