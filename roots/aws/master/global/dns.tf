resource "aws_route53_record" "oxygen" {
  zone_id = aws_route53_zone.iot.id
  name    = "oxygen.iot4.net"
  type    = "A"
  ttl     = "300"
  records = ["${chomp(data.http.myip.body)}"]
}


