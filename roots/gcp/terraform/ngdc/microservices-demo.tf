#tfsec:ignore:google-gke-enforce-pod-security-policy
#tfsec:ignore:google-gke-metadata-endpoints-disabled
#tfsec:ignore:google-gke-enable-master-networks
#tfsec:ignore:google-gke-use-service-account
#tfsec:ignore:google-gke-enable-network-policy
#tfsec:ignore:google-gke-enable-private-cluster
#tfsec:ignore:google-gke-use-cluster-labels
resource "google_container_cluster" "cluster" {
  name             = var.name
  location         = var.region
  enable_autopilot = true
  ip_allocation_policy {}
  deletion_protection = false
  depends_on          = [module.enable_google_apis]
}

output "cluster_location" {
  description = "Location of the cluster"
  value       = resource.google_container_cluster.cluster.location
}

output "cluster_name" {
  description = "Name of the cluster"
  value       = resource.google_container_cluster.cluster.name
}
