resource "aws_s3_bucket" "www" {
  bucket = "www.${local.dns_hosted_zone_name}"
  acl    = "public-read"
  website {
    redirect_all_requests_to = local.dns_hosted_zone_name
  }
}
resource "aws_s3_bucket" "apex" {
  bucket = local.dns_hosted_zone_name
  acl    = "public-read"

  tags = merge(
    local.common_tags,
  )
  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}
resource "aws_s3_bucket_policy" "public" {
  bucket = aws_s3_bucket.apex.id
  policy = data.aws_iam_policy_document.public.json
}

data "aws_iam_policy_document" "public" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.apex.arn}/*",
    ]
  }
}

resource "aws_route53_record" "main-a-record" {
  zone_id = aws_route53_zone.f.zone_id
  name    = local.dns_hosted_zone_name
  type    = "A"
  alias {
    name                   = aws_s3_bucket.apex.website_domain
    zone_id                = aws_s3_bucket.apex.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "main-c-name" {
  zone_id = aws_route53_zone.f.zone_id
  name    = "www"
  type    = "CNAME"
  ttl     = "300"
  records = [local.dns_hosted_zone_name]
}
