resource "aws_acm_certificate" "e" {
  domain_name       = "e.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_acm_certificate" "ek" {
  domain_name       = "ek.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
