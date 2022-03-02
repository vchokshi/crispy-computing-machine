resource "aws_iam_group" "admins" {
  name = "Administrators"
}

resource "aws_iam_user" "vchokshi" {
  name = "vchokshi"
}

resource "aws_iam_user_group_membership" "vchokshi" {
  user = aws_iam_user.vchokshi.name
  groups = [
    aws_iam_group.admins.name
  ]
}

data "aws_iam_policy_document" "gator" {
  statement {
    sid     = "TerraformCreated"
    actions = ["sts:AssumeRole"]
    resources = [
      "arn:aws:iam::375423940384:role/OrganizationAccountAccessRole",
      "arn:aws:iam::641684806785:role/OrganizationAccountAccessRole",
      "arn:aws:iam::264981948567:role/OrganizationAccountAccessRole",
      "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole",
      "arn:aws:iam::389986100965:role/OrganizationAccountAccessRole",
      "arn:aws:iam::732349697425:role/OrganizationAccountAccessRole"
    ]
  }
  statement {
    sid = "AmazonBillingAccess"
    actions = [
      "aws-portal:*",
      "budgets:*",
      "cur:*"
    ]
    resources = ["*"]
    effect    = "Allow"
  }
}

resource "aws_iam_policy" "gator" {
  name        = "GATOR"
  description = "GrantAccessToOrganizationAccountAccessRole"
  policy      = data.aws_iam_policy_document.gator.json
}

resource "aws_iam_group_policy_attachment" "gator" {
  group      = aws_iam_group.admins.name
  policy_arn = aws_iam_policy.gator.arn
}

