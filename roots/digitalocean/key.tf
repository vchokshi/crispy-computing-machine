resource "digitalocean_ssh_key" "vchokshi" {
  name       = "vchokshi@oxygen"
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}
