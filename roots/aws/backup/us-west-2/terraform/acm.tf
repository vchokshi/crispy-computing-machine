resource "aws_acm_certificate" "a" {
  domain_name       = "${local.region_short}.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}


