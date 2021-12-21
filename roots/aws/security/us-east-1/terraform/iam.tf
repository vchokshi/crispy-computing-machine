resource "aws_iam_role" "log4j" {
  name = "log4j"

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

resource "aws_iam_instance_profile" "log4j" {
  name = "log4j"
  role = aws_iam_role.log4j.name
}


resource "aws_iam_role_policy" "log4j" {
  name = "log4j"
  role = aws_iam_role.log4j.id

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

