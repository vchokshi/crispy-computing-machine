resource "aws_instance" "east" {
  count                       = length(module.vpc.public_subnets)
  ami                         = data.aws_ami.amazon-linux-2.id
  subnet_id                   = module.vpc.public_subnets[count.index]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.v.key_name
  #tags                        = local.common_tags
  #volume_tags                 = local.common_tags
  iam_instance_profile = data.aws_iam_instance_profile.instance_profile.name
}

resource "aws_route53_record" "east_elastio_controller" {
  zone_id = data.aws_route53_zone.public.id
  name    = "ec.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.east[0].public_ip]
}

resource "aws_route53_record" "ssh" {
  count   = length(module.vpc.public_subnets)
  zone_id = data.aws_route53_zone.public.id
  name    = "${var.region}-${count.index}.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.east[count.index].public_ip]
}

output "aws_instance_id" {
  value = aws_instance.east.*.id
}

output "ssh" {
  value = "ssh ec2-user@${aws_route53_record.ssh[0].name}"
}
output "east_elastio_controller" {
  value = "ssh ec2-user@${aws_route53_record.east_elastio_controller.name}"
}
