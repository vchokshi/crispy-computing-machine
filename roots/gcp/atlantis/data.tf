data "google_compute_zones" "available" {}

output "zones" {
  value = data.google_compute_zones.available
}
