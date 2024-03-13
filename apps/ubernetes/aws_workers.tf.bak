resource "aws_instance" "worker1" {
  ami                         = data.aws_ami.debian-11.id
  subnet_id                   = aws_subnet.aa.id
  instance_type               = "t3.xlarge"
  associate_public_ip_address = true
  key_name                    = aws_key_pair.vchokshi.key_name
  tags = {
    Name = var.project_name
  }
  vpc_security_group_ids = [aws_security_group.SSH-SG.id]
}
resource "aws_route53_record" "worker1" {
  zone_id = data.aws_route53_zone.public.id
  name    = "worker-1.aws.iot4.net"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.worker1.public_ip]
}

output "aws_worker_1" {
  value = aws_instance.worker1.public_ip
}
resource "aws_instance" "worker2" {
  ami                         = data.aws_ami.debian-11.id
  subnet_id                   = aws_subnet.ab.id
  instance_type               = "t3.xlarge"
  associate_public_ip_address = true
  key_name                    = aws_key_pair.vchokshi.key_name
  tags = {
    Name = var.project_name
  }
  vpc_security_group_ids = [aws_security_group.SSH-SG.id]
}
resource "aws_route53_record" "worker2" {
  zone_id = data.aws_route53_zone.public.id
  name    = "worker-2.aws.iot4.net"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.worker2.public_ip]
}

output "aws_worker_2" {
  value = aws_instance.worker2.public_ip
}
