data "google_dns_managed_zone" "publiczone" {
  provider = google.global
  name     = "iot4zone"

}
data "google_dns_managed_zone" "gkezone" {
  provider = google.global
  name     = "iot4gkezone"

}
