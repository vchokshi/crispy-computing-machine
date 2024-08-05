resource "digitalocean_domain" "default" {
  name = "do.iot4.net"
}

resource "digitalocean_domain" "viharc" {
  name = "do.viharc.com"
}

resource "digitalocean_domain" "vchokshi" {
  name = "do.vchokshi.com"
}

resource "digitalocean_domain" "observability" {
  name = "obs.vchokshi.com"
}

resource "digitalocean_domain" "apps" {
  name = "apps.viharc.com"
}

resource "digitalocean_domain" "pen" {
  name = "pen.iot4.net"
}

resource "digitalocean_domain" "labs" {
  name = "labs.vchokshi.com"
}
