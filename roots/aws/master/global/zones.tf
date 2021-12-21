resource "aws_route53_zone" "iot" {
  name = "iot4.net"
}

resource "aws_route53_record" "finance" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "finance.iot4.net"
  type    = "NS"
  ttl     = "300"
  records = [
    "ns-1097.awsdns-09.org",
    "ns-1784.awsdns-31.co.uk",
    "ns-436.awsdns-54.com",
    "ns-806.awsdns-36.net",
  ]
}

resource "aws_route53_record" "backup" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "backup.iot4.net"
  type    = "NS"
  ttl     = "300"
  records = [
    "ns-1146.awsdns-15.org",
    "ns-1980.awsdns-55.co.uk",
    "ns-231.awsdns-28.com",
    "ns-648.awsdns-17.net",

  ]
}

resource "aws_route53_record" "s" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "security.iot4.net"
  type    = "NS"
  ttl     = "300"
  records = [
    "ns-1367.awsdns-42.org",
    "ns-1789.awsdns-31.co.uk",
    "ns-220.awsdns-27.com",
    "ns-757.awsdns-30.net",
  ]
}
