##############################################################
# Production Server
##############################################################

resource "aws_instance" "gitlab" {
  ami           = "${data.aws_ami.ubuntu.id}"
  instance_type = "t2.medium"
  key_name= "${var.key_name}"
  subnet_id = "${aws_subnet.1c.id}"
  vpc_security_group_ids = [ "${aws_security_group.HTTPS-SG.id}", "${aws_security_group.HTTP-SG.id}"]
  tags {
    Name        = "${var.project_name} gitlab"
  }
  private_ip    = "10.0.3.170"
}

resource "aws_route53_record" "gitlab" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "gitlab.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.gitlab.public_ip}"]
}
resource "aws_route53_record" "gitlab_internal" {
  zone_id = "${aws_route53_zone.internal.zone_id}"
  name    = "gitlab.internal.${var.domain}"
  type    = "A"
  ttl     = "300"
  records = ["${aws_instance.gitlab.private_ip}"]
 }
