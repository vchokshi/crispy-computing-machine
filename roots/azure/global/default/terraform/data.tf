data "azurerm_client_config" "core" {}

data "azurerm_subscriptions" "databricks" {
  display_name_contains = "databricks"
}
data "azurerm_subscriptions" "veristream" {
  display_name_prefix = "veristream"
}
data "azurerm_subscriptions" "intellispace" {
  display_name_contains = "IntelliSpace"
}
data "azurerm_subscriptions" "omegaai" {
  display_name_prefix = "OmegaAI"
}
data "azurerm_subscriptions" "id" {
  display_name_prefix = "Ping"
}
data "azurerm_subscriptions" "mgmt" {
  display_name_prefix = "Splunk"
}
data "azurerm_subscriptions" "conn" {
  display_name_contains = "Lumen"
}
data "azuread_domains" "all" {
}
