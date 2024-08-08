data "azurerm_subscriptions" "iottest" {
  display_name_prefix = "IOT4 Policy Based Subscription"
}
resource "azurerm_management_group" "iot4" {
  display_name     = "IOT4 Managment Group"
  subscription_ids = [data.azurerm_subscriptions.iottest.subscriptions[0].subscription_id]
}
resource "azurerm_subscription_policy_assignment" "asb_assignment" {
  name                 = "azuresecuritybenchmark"
  display_name         = "Not Default Azure Security Benchmark"
  policy_definition_id = "/providers/Microsoft.Authorization/policySetDefinitions/1f3afdf9-d0c9-4c3d-847f-89da613e70a8"
  subscription_id      = data.azurerm_subscriptions.iottest.subscriptions[0].id
}
resource "azurerm_subscription_policy_assignment" "auditvms" {
  name                 = "audit-vm-manageddisks"
  policy_definition_id = "/providers/Microsoft.Authorization/policyDefinitions/06a78e20-9358-41c9-923c-fb736d382a4d"
  description          = "Shows all virtual machines not using managed disks"
  display_name         = "Audit VMs without managed disks assignment"
  subscription_id      = data.azurerm_subscriptions.iottest.subscriptions[0].id

}
