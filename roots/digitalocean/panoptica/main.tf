resource "digitalocean_droplet" "controller" {
  image    = "ubuntu-20-04-x64"
  name     = "controller"
  region   = "SFO3"
  size     = "s-4vcpu-8gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "controller_ip" {
  value = digitalocean_droplet.controller.ipv4_address
}

resource "digitalocean_record" "c" {
  domain = "do.iot4.net"
  type   = "A"
  name   = "controller"
  ttl    = 30
  value  = digitalocean_droplet.controller.ipv4_address
}
resource "digitalocean_droplet" "worker_1" {
  image    = "ubuntu-20-04-x64"
  name     = "worker-1"
  region   = "SFO3"
  size     = "s-4vcpu-8gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "worker_1" {
  value = digitalocean_droplet.worker_1.ipv4_address
}

resource "digitalocean_droplet" "worker_2" {
  image    = "ubuntu-20-04-x64"
  name     = "worker-2"
  region   = "SFO3"
  size     = "s-4vcpu-8gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

output "worker_2" {
  value = digitalocean_droplet.worker_2.ipv4_address
}

resource "digitalocean_record" "worker_1" {
  domain = "do.iot4.net"
  type   = "A"
  name   = "worker-1"
  ttl    = 30
  value  = digitalocean_droplet.worker_1.ipv4_address
}
resource "digitalocean_record" "worker_2" {
  domain = "do.iot4.net"
  type   = "A"
  name   = "worker-2"
  ttl    = 30
  value  = digitalocean_droplet.worker_2.ipv4_address
}

