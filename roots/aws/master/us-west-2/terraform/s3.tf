resource "aws_s3_bucket" "iot4_www" {
  bucket        = "iot4-www"
  force_destroy = false
}

resource "aws_s3_bucket_policy" "www" {
  bucket = aws_s3_bucket.iot4_www.id
  policy = file("${path.module}/policy.json")
}


resource "aws_s3_bucket_acl" "example_bucket_acl" {
  bucket = aws_s3_bucket.iot4_www.id
  acl    = "public-read"

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

resource "aws_route53_record" "www-a" {
  zone_id = data.aws_route53_zone.public.zone_id
  name    = "www.${var.domain}"
  type    = "A"
  alias {
    name                   = aws_s3_bucket.iot4_www.website_endpoint
    zone_id                = aws_s3_bucket.iot4_www.hosted_zone_id
    evaluate_target_health = true

  }

}
