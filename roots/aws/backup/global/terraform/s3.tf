resource "aws_s3_bucket" "theme" {
  bucket = "iot4-backup-themeforest"
  acl    = "public-read"
}
resource "aws_s3_bucket" "lazy" {
  bucket = "iot4-backup-lazy"
  acl    = "private"
}
