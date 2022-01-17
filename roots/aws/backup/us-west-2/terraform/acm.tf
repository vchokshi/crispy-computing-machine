resource "aws_acm_certificate" "w" {
  domain_name       = "west.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
