resource "digitalocean_ssh_key" "vchokshi" {
  name       = "vchokshi"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_key_pair" "vchokshi" {
  key_name   = "vchokshi"
  public_key = file("~/.ssh/id_rsa.pub")
}
