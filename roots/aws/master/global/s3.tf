resource "aws_kms_key" "mocks" {
  description         = "This key is used to encrypt bucket objects in the mock bucket"
  enable_key_rotation = true


}
#tfsec:ignore:aws-s3-enable-bucket-logging
resource "aws_s3_bucket" "mocks" {
  bucket = "iot4-mock-pii-phi"
  versioning {
    enabled = true
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.mocks.arn
        sse_algorithm     = "aws:kms"

      }

    }

  }
}

resource "aws_s3_bucket_public_access_block" "mock" {
  bucket                  = aws_s3_bucket.mocks.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
