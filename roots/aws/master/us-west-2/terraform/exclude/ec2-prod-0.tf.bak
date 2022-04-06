##############################################################
# Production Server
##############################################################

resource "aws_instance" "www-0" {
  ami           = "${var.www}"
  instance_type = "t2.micro"
  key_name= "id_rsa"
  subnet_id = "${aws_subnet.1c.id}"
  vpc_security_group_ids = [ "${aws_security_group.OVPN_SG.id}", "${aws_security_group.SSH-SG.id}"]
  # ebs_optimized= true
  tags {
    Name        = "${var.project_name} www-0"
  }
}

resource "aws_route53_record" "bastion" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "bastion.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.www-0.public_ip}"]
}

resource "aws_route53_record" "ovpn" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "vpn.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.www-0.public_ip}"]
}



resource "aws_route53_record" "www" {
  zone_id = "${aws_route53_zone.internal.zone_id}"
  name    = "www.internal.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.www-0.private_ip}"]
 }
