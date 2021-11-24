resource "aws_s3_bucket" "bigfiles" {
  bucket = "iot4-backup-biggfiles"
  acl    = "private"
}
