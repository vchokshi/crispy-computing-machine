resource "digitalocean_droplet" "controller" {
  image    = "ubuntu-20-04-x64"
  name     = "controller"
  region   = "SFO3"
  size     = "s-1vcpu-1gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "controller_ip" {
  value = digitalocean_droplet.controller.ipv4_address
}
