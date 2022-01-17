resource "aws_acm_certificate" "e" {
  domain_name       = "east.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
