data "github_repository" "ccm" {
  full_name = "vchokshi/crispy-computing-machine"
}
output "repo" {
  value = data.github_repository.ccm.ssh_clone_url
}
