resource "aws_s3_bucket" "assets" {
  bucket = "iot4-finance-assets"
  acl    = "private"

  tags = merge(
    local.common_tags,
  )
}
