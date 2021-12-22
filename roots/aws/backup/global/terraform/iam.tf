resource "aws_iam_role" "vchokshi" {
  name = "vchokshi"

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

resource "aws_iam_instance_profile" "vchokshi" {
  name = "vchokshi"
  role = aws_iam_role.vchokshi.name
}


resource "aws_iam_role_policy" "vchokshi" {
  name = "vchokshi"
  role = aws_iam_role.vchokshi.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:*",
        "dynamodb:*",
	"sqs:*",
	"ram:*",
	"ssm:*",
	"iam:*",
	"sts:*",
	"lambda:*",
	"kms:*",
	"ec2:*",
    "cloudformation:*",
    "events:*",
    "sns:*",
    "batch:*",
"autoscaling:*",
"application-autoscaling:*",
"ecs:*",

"cloudwatch:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

