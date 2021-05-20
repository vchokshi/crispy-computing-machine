variable "owner" {
  default = "vc@iot4.net"
}
variable "ssl_policy" {
  default = "ELBSecurityPolicy-FS-2018-06"
}
variable "domain" {
  default = "iot4.net"
}
variable "www" {
  default= "ami-005bdb005fb00e791"
}

variable "project_name" {
  description = "Please Enter The Project Name"
}

variable "public_key_path" {
  description = "Path to the SSH public key"
}

variable "key_name" {
  description = "Desired name of AWS key pair"
}