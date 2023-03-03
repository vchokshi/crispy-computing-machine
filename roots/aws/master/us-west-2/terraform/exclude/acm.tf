resource "aws_acm_certificate" "cert" {
  domain_name       = "www.iot4.net"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "api" {
  domain_name       = "api.iot4.net"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
