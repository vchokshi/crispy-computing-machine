resource "aws_instance" "east" {
  count                       = length(module.vpc.public_subnets) - 1
  ami                         = data.aws_ami.amazon-linux-2.id
  subnet_id                   = module.vpc.public_subnets[count.index]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.v.key_name
  tags = merge(
    local.common_tags,
    {
      Name = "${local.region_short}-${count.index}.${local.dns_hosted_zone_name}"
  })
  iam_instance_profile = data.aws_iam_instance_profile.instance_profile.name
}

output "ec2_instances" {
  value = aws_instance.east.*.id
}

resource "aws_route53_record" "ssh" {
  count   = length(module.vpc.public_subnets) - 1
  zone_id = data.aws_route53_zone.public.id
  name    = "${local.region_short}-${count.index}.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.east[count.index].public_ip]
}

output "hostnames" {
  value = aws_route53_record.ssh.*.name
}

resource "aws_elb" "e" {
  name    = "${local.region_short}-elb"
  subnets = module.vpc.public_subnets

  listener {
    instance_port      = 80
    instance_protocol  = "http"
    lb_port            = 443
    lb_protocol        = "https"
    ssl_certificate_id = aws_acm_certificate.a.arn
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
  name    = "${local.region_short}.${local.dns_hosted_zone_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_elb.e.dns_name]
}

output "http" {
  value = aws_route53_record.e.name
}
resource "aws_route53_health_check" "e" {
  fqdn              = aws_route53_record.e.name
  port              = 443
  type              = "HTTPS"
  resource_path     = "/"
  failure_threshold = "5"
  request_interval  = "30"
}
