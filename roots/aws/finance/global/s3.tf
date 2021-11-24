resource "aws_s3_bucket" "assets" {
  bucket = "iot4-finance-assets"
  acl    = "private"

  tags = merge(
    local.common_tags,
  )
}
resource "aws_s3_bucket" "img" {
  bucket = "iot4-finance-img"
  acl    = "private"

  tags = merge(
    local.common_tags,
  )
}
