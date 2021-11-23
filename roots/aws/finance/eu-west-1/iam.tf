resource "aws_iam_role" "f" {
  name = "finance_role"

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

#resource "aws_iam_instance_profile" "f" {
#name = "finance"
#role = aws_iam_role.f.name
#}


resource "aws_iam_role_policy" "f" {
  name = "finance"
  role = aws_iam_role.f.id

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

