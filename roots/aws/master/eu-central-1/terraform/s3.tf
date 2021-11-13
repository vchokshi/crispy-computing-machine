resource "aws_s3_bucket" "elastio-cf" {
  bucket = "elastio-cf"
  acl    = "private"
}
