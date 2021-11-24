resource "aws_ssm_parameter" "site" {
  name  = "/atlassian/site"
  type  = "String"
  value = "theonlyiot4"
}
resource "aws_ssm_parameter" "user" {
  name  = "/atlassian/user"
  type  = "String"
  value = "vc@iot4.net"
}
resource "aws_ssm_parameter" "token" {
  name  = "/atlassian/api_token"
  type  = "SecureString"
  value = var.atlassian_api_token
}
