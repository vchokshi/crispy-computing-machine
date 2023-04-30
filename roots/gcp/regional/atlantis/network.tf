resource "google_compute_network" "atlantis" {
  name                    = local.network
  auto_create_subnetworks = false
  project                 = local.project_id
}

resource "google_compute_subnetwork" "atlantis" {
  name          = local.subnetwork
  ip_cidr_range = "10.2.0.0/16"
  region        = local.region
  network       = google_compute_network.atlantis.id
  project       = local.project_id
}

resource "google_compute_router" "atlantis" {
  name    = "atlantis-router"
  region  = google_compute_subnetwork.atlantis.region
  network = google_compute_network.atlantis.name

  bgp {
    asn = 64514
  }
  project = local.project_id
}

# Create a NAT for outbound internet traffic
resource "google_compute_router_nat" "atlantis" {
  name                               = "atlantis-router-nat"
  router                             = google_compute_router.atlantis.name
  region                             = google_compute_router.atlantis.region
  nat_ip_allocate_option             = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
  project                            = local.project_id
}
