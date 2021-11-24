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
