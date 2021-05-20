resource "aws_route53_record" "elb-prod" {
  zone_id = "${data.aws_route53_zone.public.zone_id}"
  name    = "www.${var.domain}"
  type    = "CNAME"
  ttl     = "60"
  records = ["d18jmxuhpch9qh.cloudfront.net"]
}

