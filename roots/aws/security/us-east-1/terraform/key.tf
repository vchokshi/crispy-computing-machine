resource "aws_key_pair" "v" {
  key_name   = "vchokshi@vipert491"
  public_key = file("/Users/vchokshi/.ssh/id_rsa.pub")
}
