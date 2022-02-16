resource "aws_s3_bucket" "bigfiles" {
  bucket = "iot4-biggfiles"
  acl    = "public-read"
}
