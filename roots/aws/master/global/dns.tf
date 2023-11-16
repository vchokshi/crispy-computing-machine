resource "aws_route53_record" "oxygen" {
  zone_id = aws_route53_zone.iot.id
  name    = "vpn.iot4.net"
  type    = "CNAME"
  ttl     = "300"
  records = ["iot4.zapto.org"]
}
