#tfsec:ignore:aws-kms-auto-rotate-keys
resource "aws_kms_key" "s3" {
  description             = "S3 KMS Key"
  deletion_window_in_days = 7
  policy                  = file("kms_key_policy.json")
}

resource "aws_kms_alias" "a" {
  name          = "alias/my-s3-key"
  target_key_id = aws_kms_key.s3.key_id
}
