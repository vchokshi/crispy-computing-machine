resource "aws_instance" "lamp" {
  ami                         = data.aws_ami.amazon-linux-2.id
  subnet_id                   = module.vpc.public_subnets[0]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = local.email_address
  tags                        = local.common_tags
  volume_tags                 = local.common_tags
  iam_instance_profile        = aws_iam_instance_profile.elastio.name
}

resource "aws_route53_record" "ssh" {
  zone_id = data.aws_route53_zone.public.id
  name    = "${local.project}.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.lamp.public_ip]
}

resource "aws_elb" "e" {
  name    = "${local.project}-elb"
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

  instances                   = [aws_instance.lamp.id]
  cross_zone_load_balancing   = true
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400
}

resource "aws_route53_record" "e" {
  zone_id = data.aws_route53_zone.public.id
  name    = "e.${local.dns_hosted_zone_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_elb.e.dns_name]
}

output "aws_instance_id" {
  value = aws_instance.lamp.id
}
output "lamp_url" {
  value = "https://e.${local.dns_hosted_zone_name}"
}

output "lamp_url_php" {
  value = "https://e.${local.dns_hosted_zone_name}/phpinfo.php"
}
