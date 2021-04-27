resource "aws_s3_bucket" "terraform" {
  bucket = "iot4-tf-state"
  acl    = "private"
  tags {
    Name        = "${var.project_name}"
  }
}

resource "aws_s3_bucket" "lambdas" {
  bucket = "iot4-lambda-staging"
  acl    = "private"
  tags {
    Name        = "${var.project_name}"
  }
}

resource "aws_s3_bucket" "iot4_group" {
  bucket = "iot4-group"
  acl    = "public-read"
  policy = "${file("${path.module}/policy.json")}"
  force_destroy = false
   website {
    index_document = "index.html"
    error_document = "error.html"
  }
  tags {
    Name        = "${var.project_name}"
  }
}
