data "azurerm_client_config" "core" {}

data "azurerm_subscriptions" "mgmt" {
  display_name_contains = "Management"
}
output "management_subscription" {
  value = data.azurerm_subscriptions.mgmt.subscriptions[0].subscription_id
}
data "azuread_domains" "all" {
}

data "azurerm_billing_mpa_account_scope" "vciot" {
  billing_account_name = "58b9db98-4018-5bff-d0c9-5ef373d30095:f2268dfb-6408-44f8-8e4f-fb07d1857c66_2019-05-31"
  customer_name        = "F56B-CESX-BG7-PGB"

}

output "id" {
  value = data.azurerm_billing_mpa_account_scope.vciot.id

}
