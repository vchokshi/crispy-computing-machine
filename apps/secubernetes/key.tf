resource "digitalocean_ssh_key" "vchokshi" {
  name       = local.email_address
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_key_pair" "v" {
  key_name   = local.email_address
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}

resource "aws_key_pair" "y" {
  key_name   = "windows.iot4.net"
  public_key = file("/home/vchokshi/.ssh/id_ssh_rsa.pub")
}

resource "aws_key_pair" "w" {
  provider   = aws.us-east-1
  key_name   = local.email_address
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}

resource "aws_key_pair" "x" {
  provider   = aws.us-west-2
  key_name   = local.email_address
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}
