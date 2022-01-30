resource "aws_elb" "e" {
  name    = "east-elb"
  subnets = module.vpc.public_subnets

  listener {
    instance_port      = 80
    instance_protocol  = "http"
    lb_port            = 443
    lb_protocol        = "https"
    ssl_certificate_id = aws_acm_certificate.e.arn
  }

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    target              = "HTTP:80/"
    interval            = 30
  }

  instances                   = aws_instance.east.*.id
  cross_zone_load_balancing   = true
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400
}

resource "aws_route53_record" "e" {
  zone_id = data.aws_route53_zone.public.id
  name    = "east.${local.dns_hosted_zone_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_elb.e.dns_name]
}

resource "aws_route53_health_check" "e" {
  fqdn              = aws_route53_record.e.name
  port              = 443
  type              = "HTTPS"
  resource_path     = "/"
  failure_threshold = "5"
  request_interval  = "30"
}