#https://developer.hashicorp.com/terraform/tutorials/it-saas/entra-id

data "azuread_domains" "default" {
  only_initial = true
}

output "domain_name" {
  value = data.azuread_domains.default.domains.0.domain_name
}

locals {
  domain_name = data.azuread_domains.default.domains.0.domain_name
  users       = csvdecode(file("${path.module}/users.csv"))
}

resource "random_pet" "suffix" {
  length = 2
}

resource "azuread_user" "users" {
  for_each = { for user in local.users : user.first_name => user }
  user_principal_name = format(
    "%s%s-%s@%s",
    substr(lower(each.value.first_name), 0, 1),
    lower(each.value.last_name),
    random_pet.suffix.id,
    local.domain_name

  )

  password = format(
    "%s%s%s!",
    lower(each.value.last_name),
    substr(lower(each.value.first_name), 0, 1),
    length(each.value.first_name)

  )
  force_password_change = true

  display_name = "${each.value.first_name} ${each.value.last_name}"
  department   = each.value.department
  job_title    = each.value.job_title

}

## Add users from users.csv into AD groups.

resource "azuread_group" "engineering" {
  display_name     = "Education Department"
  security_enabled = true

}

resource "azuread_group_member" "education" {
  for_each = { for u in azuread_user.users : u.mail_nickname => u if u.department == "Education" }

  group_object_id  = azuread_group.engineering.id
  member_object_id = each.value.id

}

resource "azuread_group" "managers" {
  display_name     = "Education - Managers"
  security_enabled = true

}

resource "azuread_group_member" "managers" {
  for_each = { for u in azuread_user.users : u.mail_nickname => u if u.job_title == "Manager" }

  group_object_id  = azuread_group.managers.id
  member_object_id = each.value.id

}

resource "azuread_group" "engineers" {
  display_name     = "Education - Engineers"
  security_enabled = true

}

resource "azuread_group_member" "engineers" {
  for_each = { for u in azuread_user.users : u.mail_nickname => u if u.job_title == "Engineer" }

  group_object_id  = azuread_group.engineers.id
  member_object_id = each.value.id

}

resource "azuread_group" "customer_success" {
  display_name     = "Education - Customer Success"
  security_enabled = true

}

resource "azuread_group_member" "customer_success" {
  for_each         = { for u in azuread_user.users : u.mail_nickname => u if u.job_title == "Customer Success" }
  group_object_id  = azuread_group.customer_success.id
  member_object_id = each.value.id

}

data "azuread_domains" "aad_domains" {}

output "domain_names" {
  value = data.azuread_domains.aad_domains.domains.*.domain_name

}
