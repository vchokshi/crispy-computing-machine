resource "aws_organizations_organization" "org" {
  feature_set = "ALL"
  aws_service_access_principals = [
    "sso.amazonaws.com",
    "config.amazonaws.com",
    "securityhub.amazonaws.com",
    "reporting.trustedadvisor.amazonaws.com",
    "guardduty.amazonaws.com",
    "config-multiaccountsetup.amazonaws.com",
    "backup.amazonaws.com"
  ]
  enabled_policy_types = [
    "SERVICE_CONTROL_POLICY",
    "BACKUP_POLICY",
  ]

  lifecycle {
    prevent_destroy = true
  }
}

output "org_accounts" {
  value = aws_organizations_organization.org.accounts
}

resource "aws_organizations_policy" "policy" {
  name        = "organization_policy"
  description = "AWS Service Control Policy"
  type        = "SERVICE_CONTROL_POLICY"
  content     = data.aws_iam_policy_document.policy.json
}

data "aws_iam_policy_document" "policy" {
  version = "2012-10-17"
  statement {

    actions = [
      "account:*",
      "acm:*",
      "apigateway:*",
      "cloudtrail:*",
      "cloudwatch:*",
      "ec2:*",
      "s3:*",
    ]

    effect = "Allow"

    resources = [
      "*"
    ]

  }
}

resource "aws_organizations_organizational_unit" "main" {
  name      = "iot4"
  parent_id = aws_organizations_organization.org.roots[0].id
}

output "ou_main" {
  value = aws_organizations_organizational_unit.main.accounts
}

resource "aws_organizations_organizational_unit" "grc" {
  name      = "grc"
  parent_id = aws_organizations_organizational_unit.main.id
}

output "ou_grc" {
  value = aws_organizations_organizational_unit.grc.accounts
}

resource "aws_organizations_organizational_unit" "fpna" {
  name      = "fpna"
  parent_id = aws_organizations_organizational_unit.main.id
}

output "ou_fpna" {
  value = aws_organizations_organizational_unit.fpna.accounts
}


resource "aws_organizations_policy_attachment" "attachment" {
  policy_id = aws_organizations_policy.policy.id
  target_id = aws_organizations_organizational_unit.main.id
}

resource "aws_organizations_account" "account" {
  name      = "finance"
  email     = "finance@iot4.net"
  parent_id = aws_organizations_organizational_unit.fpna.id
  #role_name = "origami"
}

resource "aws_organizations_account" "hosting" {
  name      = "hosting"
  email     = "ms@iot4.net"
  parent_id = aws_organizations_organizational_unit.main.id
  #role_name = "origami"
}

resource "aws_organizations_account" "native" {
  name      = "native"
  email     = "vchokshi@iot4.net"
  parent_id = aws_organizations_organizational_unit.main.id
  #role_name = "origami"
}
resource "aws_organizations_account" "backup" {
  name      = "backup"
  email     = "backup@iot4.net"
  parent_id = aws_organizations_organizational_unit.grc.id
  #role_name = "origami"
}
