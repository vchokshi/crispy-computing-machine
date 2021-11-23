resource "aws_route53_zone" "backup" {
  name = "backup.iot4.net"
}

output "backup_name_servers_cc_to_global_master" {
  value = aws_route53_zone.backup.name_servers
}
