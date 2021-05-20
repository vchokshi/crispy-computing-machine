resource "aws_iam_role" "elastio" {
  name = "elastio_role"

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

resource "aws_iam_instance_profile" "elastio" {
  name = "elastio"
  role = aws_iam_role.elastio.name
}


resource "aws_iam_role_policy" "elastio" {
  name = "elastio"
  role = aws_iam_role.elastio.id

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
	"ec2:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

