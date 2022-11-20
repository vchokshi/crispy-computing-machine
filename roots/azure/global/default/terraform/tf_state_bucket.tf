#Do not destroy this resource
#GCP state files are stored in Azure
#Azure stores state files in AWS
#AWS stores state files in GCP

resource "azurerm_resource_group" "rg" {
  name     = "gcpTFResourceGroup"
  location = "westus2"
}
resource "azurerm_storage_account" "gcp" {
  name                     = "gcptfstoracct"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

}
resource "azurerm_storage_container" "tfblob" {
  name                  = "tfstateblob"
  storage_account_name  = azurerm_storage_account.gcp.name
  container_access_type = "blob"

}
