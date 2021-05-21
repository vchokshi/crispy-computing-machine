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
  default = "viper"
}

variable "public_key_path" {
  description = "Path to the SSH public key"
  default = "~/.ssh/id_rsa"
}

variable "key_name" {
  description = "Desired name of AWS key pair"
  default = "id_rsa"
}
