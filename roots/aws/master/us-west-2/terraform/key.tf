resource "aws_key_pair" "v" {
  key_name   = "vchokshi@control"
  public_key = file("~//.ssh/id_rsa.pub")
}
