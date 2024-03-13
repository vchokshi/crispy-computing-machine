resource "aws_acm_certificate" "a" {
  domain_name       = "eu.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "b" {
  provider          = aws.us-east-1
  domain_name       = "east.${local.dns_hosted_zone_name}"
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
