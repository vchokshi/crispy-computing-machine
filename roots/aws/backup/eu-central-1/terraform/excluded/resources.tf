resource "aws_instance" "e" {
  count                       = length(module.vpc.public_subnets)
  ami                         = data.aws_ami.amazon-linux-2.id
  subnet_id                   = module.vpc.public_subnets[count.index]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.v.key_name
  tags                        = local.common_tags
  volume_tags                 = local.common_tags
  iam_instance_profile        = data.aws_iam_instance_profile.instance_profile.name
}

resource "aws_route53_record" "ssh" {
  count   = length(module.vpc.public_subnets)
  zone_id = data.aws_route53_zone.public.id
  name    = "${var.region}-${count.index}.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.e[count.index].public_ip]
}

output "aws_instance_id" {
  value = aws_instance.e.*.id
}

resource "aws_elb" "w" {
  name    = "${var.region}-elb"
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

  instances                   = aws_instance.e.*.id
  cross_zone_load_balancing   = true
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400
}

resource "aws_route53_record" "w" {
  zone_id = data.aws_route53_zone.public.id
  name    = "${local.region_short}.${local.dns_hosted_zone_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_elb.w.dns_name]
}

resource "aws_route53_health_check" "w" {
  fqdn              = aws_route53_record.w.name
  port              = 443
  type              = "HTTPS"
  resource_path     = "/"
  failure_threshold = "5"
  request_interval  = "30"
}
resource "aws_efs_file_system" "f" {
  creation_token = "${var.region}-efs"
}
output "efs_file_system_dns_name" {
  value = aws_efs_file_system.f.dns_name
}

resource "aws_efs_mount_target" "mt" {
  count           = length(module.vpc.public_subnets)
  file_system_id  = aws_efs_file_system.f.id
  subnet_id       = module.vpc.public_subnets[count.index]
  security_groups = [aws_default_security_group.default.id]
}

resource "aws_efs_backup_policy" "policy" {
  file_system_id = aws_efs_file_system.f.id

  backup_policy {
    status = "ENABLED"
  }
}
