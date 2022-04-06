resource "aws_route53_record" "home" {
  zone_id = data.aws_route53_zone.public.id
  name    = "home.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = ["${chomp(data.http.myip.body)}"]
}


