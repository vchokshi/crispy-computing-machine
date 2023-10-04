resource "aws_instance" "lamp" {
  ami                         = data.aws_ami.ubuntu.id
  subnet_id                   = aws_subnet.aa.id
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.v.key_name
  tags                        = local.common_tags
  volume_tags                 = local.common_tags
  vpc_security_group_ids      = [aws_security_group.MS-SG.id]
  root_block_device {
    encrypted = true

  }
  metadata_options {
    http_tokens   = "required"
    http_endpoint = "enabled"

  }
}

resource "aws_route53_record" "ssh" {
  zone_id = data.aws_route53_zone.aws.id
  name    = "target.aws.iot4.net"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.lamp.public_ip]
}

output "aws_instance_id" {
  value = aws_instance.lamp.id
}
