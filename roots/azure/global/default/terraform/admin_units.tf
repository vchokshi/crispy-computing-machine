resource "azuread_administrative_unit" "Engineering" {
  display_name              = "Engineering-AU"
  description               = "Just a terraform example"
  hidden_membership_enabled = false

}
