resource "aws_route53_zone" "iot" {
  name = "iot4.net"
}

resource "aws_route53_zone" "internal_iot" {
  name = "internal.iot4.net"
  vpc {
    vpc_id     = "vpc-08690b9a9d47c792b"
    vpc_region = "eu_central-1"
  }
}

resource "aws_route53_zone" "viharc" {
  name = "viharc.com"
}
resource "aws_route53_zone" "vchokshi" {
  name = "vchokshi.com"
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

resource "aws_route53_record" "security" {
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
resource "aws_route53_record" "azure" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "az.iot4.net"
  type    = "NS"
  ttl     = "300"
  records = [
    "ns1-07.azure-dns.com.",
    "ns2-07.azure-dns.net.",
    "ns3-07.azure-dns.org.",
    "ns4-07.azure-dns.info."
  ]
}

# Delegate a subzone to digital ocean

resource "aws_route53_record" "do" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "do.iot4.net"
  type    = "NS"
  ttl     = "300"
  records = [
    "ns1.digitalocean.com.",
  ]
}

# Add a zone for Atlassian
resource "aws_route53_record" "atlassian" {
  zone_id = aws_route53_zone.iot.zone_id
  name    = "theonlyiot4.iot4.net"
  type    = "TXT"
  ttl     = "3600"
  records = [
    "atlassian-domain-verification=cYRoMJIyin6DySwpBF/DrX2r97AM4QYCFAO2TtIS2aST33S4OX2cUKSRUrZrVOVu",
  ]
}

