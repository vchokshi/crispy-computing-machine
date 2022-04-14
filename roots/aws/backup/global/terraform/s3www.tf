resource "aws_s3_bucket" "top" {
  bucket = "www.${local.dns_hosted_zone_name}"
  acl    = "public-read"
  website {
    redirect_all_requests_to = local.dns_hosted_zone_name
  }
}
resource "aws_s3_bucket" "www" {
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
  bucket = aws_s3_bucket.www.id
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
      "${aws_s3_bucket.www.arn}/*",
    ]
  }
}

resource "aws_route53_record" "main-a-record" {
  zone_id = data.aws_route53_zone.public.zone_id
  name    = local.dns_hosted_zone_name
  type    = "A"
  alias {
    name                   = aws_s3_bucket.www.website_domain
    zone_id                = aws_s3_bucket.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "main-c-name" {
  zone_id = data.aws_route53_zone.public.zone_id
  name    = "www.backup.iot4.net"
  type    = "CNAME"
  ttl     = "300"
  records = [local.dns_hosted_zone_name]
}
