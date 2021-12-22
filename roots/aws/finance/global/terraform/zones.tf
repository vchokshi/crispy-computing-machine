resource "aws_route53_zone" "f" {
  name = local.dns_hosted_zone_name
}

output "finance_name_servers_cc_to_global_master" {
  value = aws_route53_zone.f.name_servers
}
