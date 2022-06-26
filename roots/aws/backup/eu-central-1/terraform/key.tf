resource "aws_key_pair" "v" {
  key_name   = local.email_address
  public_key = file("/home/vchokshi/.ssh/id_rsa.pub")
}
