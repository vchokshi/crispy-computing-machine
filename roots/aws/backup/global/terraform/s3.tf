resource "aws_s3_bucket" "lazy" {
  bucket = "iot4-backup-lazy"
  acl    = "private"
}


resource "aws_s3_bucket" "leza" {
  bucket = "iot4-backup-leza"
  acl    = "private"
}

resource "aws_s3_bucket" "liquid" {
  bucket = "iot4-backup-liquid"
  acl    = "private"
}
resource "aws_s3_bucket" "conbiz" {
  bucket = "iot4-backup-conbiz"
  acl    = "private"
}
