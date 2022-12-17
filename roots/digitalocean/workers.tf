resource "digitalocean_droplet" "worker_1" {
  image    = "ubuntu-20-04-x64"
  name     = "worker-1"
  region   = "SFO3"
  size     = "s-1vcpu-1gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "worker_1" {
  value = digitalocean_droplet.worker_1.ipv4_address
}

resource "digitalocean_droplet" "worker_2" {
  image    = "ubuntu-20-04-x64"
  name     = "worker-2"
  region   = "SFO3"
  size     = "s-1vcpu-1gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "worker_2" {
  value = digitalocean_droplet.worker_2.ipv4_address
}
