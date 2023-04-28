#resource "google_dns_managed_zone" "publiczone" {
#name        = "iot4zone"
#dns_name    = "gcp.iot4.net."
#description = "IOT4 Delegated Zone"
#labels = {
#foobar = "False"
#}
#visibility = "public"
#cloud_logging_config {
#enable_logging = false
#}
#project = "lustrous-walker-297222"
#}

data "google_dns_managed_zone" "env_dns_zone" {
  name = "gcp-iot4"
}
