##############################################################
# Target Groups Stuff
##############################################################
resource "aws_lb_target_group" "prod-http-targetgroup" {
  name     = "prod-http-targetgroup"
  port     = 80
  protocol = "HTTP"
  vpc_id   = "${aws_vpc.main.id}"
}
#############################################################
#ELB Stuff
#############################################################
resource "aws_lb" "prod-alb" {
  name               = "prod-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["${aws_security_group.ELB-SG.id}"]
  subnets            = ["${aws_subnet.1c.id}", "${aws_subnet.1d.id}"]
  enable_deletion_protection = true
}
resource "aws_lb_listener" "prod-http-listener" {
  load_balancer_arn = "${aws_lb.prod-alb.arn}"
  port              = "80"
  protocol          = "HTTP"
  default_action {
    type             = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}
resource "aws_lb_listener" "prod-alb-https-listener" {
  load_balancer_arn = "${aws_lb.prod-alb.arn}"
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "${var.ssl_policy}"
  certificate_arn   = "${aws_acm_certificate.cert.arn}"
  default_action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.prod-http-targetgroup.arn}"
  }
}

resource "aws_route53_record" "elb-prod" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "www.${var.domain}"
  type    = "CNAME"
  ttl     = "60"
  records = ["${aws_lb.prod-alb.dns_name}"]
}
