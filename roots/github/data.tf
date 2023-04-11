data "github_repository" "ccm" {
  full_name = "vchokshi/crispy-computing-machine"
}

output "repo" {
  value = data.github_repository.ccm.ssh_clone_url
}

data "github_user" "me" {
  username = "vchokshi"
}

data "github_user" "current" {
  username = ""
}

output "current_github_login" {
  value = data.github_user.current.login
}

output "me" {
  value = data.github_user.me.login
}
