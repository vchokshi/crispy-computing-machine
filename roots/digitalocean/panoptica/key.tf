resource "digitalocean_ssh_key" "vchokshi" {
  name       = "vchokshi@control"
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}
