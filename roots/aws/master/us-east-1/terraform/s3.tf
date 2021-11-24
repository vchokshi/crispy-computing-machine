resource "aws_s3_bucket" "bigfiles" {
  bucket = "backup-iot4-biggfiles"
  acl    = "private"
}
