data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}
data "aws_kms_key" "by_id" {
  key_id = "7825478b-ce3e-4ccc-bb6e-4980478a5c34"
}
