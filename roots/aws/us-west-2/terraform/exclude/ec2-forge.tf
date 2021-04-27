##############################################################
# Production Server
##############################################################

resource "aws_instance" "forge" {
  ami           = "ami-0d7d80db021ba0d11"
  instance_type = "t2.medium"
  key_name= "${var.key_name}"
  subnet_id = "${aws_subnet.1c.id}"
  vpc_security_group_ids = [ "${aws_security_group.RDP-SG.id}", "${aws_security_group.MC-SG.id}"]
  tags {
    Name        = "${var.project_name} forge"
  }
  private_ip    = "10.0.3.170"
}

resource "aws_route53_record" "forge" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "forge.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.forge.public_ip}"]
}
resource "aws_route53_record" "forge_internal" {
  zone_id = "${aws_route53_zone.internal.zone_id}"
  name    = "forge.internal.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.forge.private_ip}"]
 }
