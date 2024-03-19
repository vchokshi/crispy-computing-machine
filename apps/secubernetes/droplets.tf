resource "digitalocean_droplet" "controller" {
  image    = "ubuntu-20-04-x64"
  name     = "controller"
  region   = "SFO3"
  size     = "s-4vcpu-8gb"
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}


resource "digitalocean_record" "c" {
  domain = "do.iot4.net"
  type   = "A"
  name   = "controller"
  ttl    = 30
  value  = digitalocean_droplet.controller.ipv4_address
}

output "controller_name" {
  value = digitalocean_record.c.fqdn
}

variable "instance_count" {
  type    = number
  default = 2
}

variable "instance_size" {
  type    = string
  default = "s-8vcpu-16gb"
}

resource "digitalocean_droplet" "worker" {
  count    = var.instance_count
  image    = "ubuntu-20-04-x64"
  name     = "worker-${count.index}"
  region   = "SFO3"
  size     = var.instance_size
  ssh_keys = [digitalocean_ssh_key.vchokshi.fingerprint]
}

resource "digitalocean_record" "worker" {
  count  = var.instance_count
  domain = "do.iot4.net"
  type   = "A"
  name   = "worker-${count.index}"
  ttl    = 30
  value  = digitalocean_droplet.worker[count.index].ipv4_address
}

output "workers" {
  value = digitalocean_record.worker.*.fqdn
}
