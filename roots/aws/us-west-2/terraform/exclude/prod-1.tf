# ##############################################################
# # Production Server
# ##############################################################
#
# resource "aws_instance" "prod-1" {
#   ami           = "ami-ba602bc2"
#   instance_type = "t2.micro"
#   key_name= "id_rsa"
#   security_groups = [ "${aws_security_group.WWW-SG.name}"]
#   # ebs_optimized= true
#   tags {
#    Name = "prod-1"
#    Hostname = "prod-1"
#    Environment = "Production"
#    Owner= "${var.owner}"
#  }
# }
#
# resource "aws_eip" "prod-1" {
#   instance = "${aws_instance.prod-1.id}"
#   tags {
#     Environment = "Production"
#     Owner= "${var.owner}"
#   }
# }
# resource "aws_route53_record" "prod-1" {
#   zone_id = "${data.aws_route53_zone.public.zone_id}"
#   name    = "prod-1.${var.domain}"
#   type    = "A"
#   ttl     = "300"
#   records = ["${aws_eip.prod-1.public_ip}"]
# }
# resource "aws_lb_target_group_attachment" "prod-1-http-targetgroup" {
#   target_group_arn = "${aws_lb_target_group.prod-http-targetgroup.arn}"
#   target_id        = "${aws_instance.prod-1.id}"
#   port             = 80
# }
