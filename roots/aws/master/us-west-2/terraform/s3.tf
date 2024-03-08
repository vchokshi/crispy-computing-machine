#tfsec:ignore:aws-s3-enable-bucket-logging
#tfsec:ignore:aws-s3-enable-versioning
resource "aws_s3_bucket" "iot4_www" {
  bucket        = "www.iot4.net"
  force_destroy = false
}

resource "aws_s3_bucket_policy" "www" {
  bucket = aws_s3_bucket.iot4_www.id
  policy = file("${path.module}/policy.json")
}


#tfsec:ignore:aws-s3-no-public-access-with-acl
resource "aws_s3_bucket_acl" "example_bucket_acl" {
  bucket = aws_s3_bucket.iot4_www.id
  acl    = "public-read"

}
resource "aws_s3_bucket_server_side_encryption_configuration" "sse" {

  bucket = aws_s3_bucket.iot4_www.id
  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = data.aws_kms_key.by_id.id
      sse_algorithm     = "aws:kms"
    }
  }
}
#tfsec:ignore:aws-s3-no-public-buckets
#tfsec:ignore:aws-s3-ignore-public-acls
#tfsec:ignore:aws-s3-block-public-policy
#tfsec:ignore:aws-s3-block-public-acls
resource "aws_s3_bucket_public_access_block" "pab" {
  bucket = aws_s3_bucket.iot4_www.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.iot4_www.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

  routing_rule {
    condition {
      key_prefix_equals = "docs/"
    }
    redirect {
      replace_key_prefix_with = "documents/"
    }

  }

}

# Moving this to global to point to new website to end IOT4. Consolidated WWW
#resource "aws_route53_record" "www-a" {
#zone_id = data.aws_route53_zone.public.zone_id
#name    = "www.${var.domain}"
#type    = "A"
#alias {
#name                   = aws_s3_bucket.iot4_www.website_domain
#zone_id                = aws_s3_bucket.iot4_www.hosted_zone_id
#evaluate_target_health = false

#}

#}
