resource "aws_iam_role" "jumphost" {
  name = "jumphost"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

  tags = local.common_tags

}

resource "aws_iam_instance_profile" "jumphost" {
  name = "jumphost"
  role = aws_iam_role.jumphost.name
}

#tfsec:ignore:aws-iam-no-policy-wildcards
resource "aws_iam_role_policy" "jumphost" {
  name = "jumphost"
  role = aws_iam_role.jumphost.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:*",
    	"sqs:*",
	    "ram:*",
	    "ssm:*",
	    "iam:*",
	    "sts:*",
	    "lambda:*",
	    "kms:*",
	    "ec2:*",
        "sns:*",
        "cloudwatch:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role" "snyk" {
  name = "snyk"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
{
   "Effect": "Allow",
"Principal": {
    "AWS":  "arn:aws:iam::198361731867:user/ecr-integration-user"

},
   "Action": "sts:AssumeRole",
"Condition": {
"StringEquals": {
     "sts:ExternalId": "15f501fa-8e5e-4f3a-bdb5-a8dda509eca6"

}

}

}
  ]
}
EOF

  tags = local.common_tags

}

#tfsec:ignore:aws-iam-no-policy-wildcards
resource "aws_iam_role_policy" "snyk" {
  name = "snyk"
  role = aws_iam_role.snyk.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
"ecr:GetLifecyclePolicyPreview",
    "ecr:GetDownloadUrlForLayer",
    "ecr:BatchGetImage",
    "ecr:DescribeImages",
    "ecr:GetAuthorizationToken",
    "ecr:DescribeRepositories",
    "ecr:ListTagsForResource",
    "ecr:ListImages",
    "ecr:BatchCheckLayerAvailability",
    "ecr:GetRepositoryPolicy",
    "ecr:GetLifecyclePolicy"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}
