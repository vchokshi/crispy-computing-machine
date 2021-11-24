resource "aws_acm_certificate" "f" {
  domain_name       = data.aws_route53_zone.public.name
  validation_method = "DNS"

  tags = local.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
