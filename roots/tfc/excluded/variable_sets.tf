resource "tfe_variable_set" "aws_creds" {
  name          = "AWS-Credentials"
  description   = "AWS Credentials Variable Stack"
  organization  = tfe_organization.iot4.name
  workspace_ids = [tfe_workspace.azure.id, tfe_workspace.aws.id]

}

resource "tfe_variable" "access_key_id" {
  key             = "aws_access_key_id"
  value           = "AKIAUP3WGZDOK4Z5LZWQ"
  category        = "env"
  description     = "AWS Access Key ID"
  variable_set_id = tfe_variable_set.aws_creds.id
}
resource "tfe_variable" "access_key_secret" {
  key             = "aws_access_key_secret"
  value           = var.AWS_ACCESS_KEY_SECRET
  category        = "env"
  description     = "AWS Access Key ID"
  variable_set_id = tfe_variable_set.aws_creds.id
  sensitive       = true
}
