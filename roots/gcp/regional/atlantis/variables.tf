variable "machine_type" {
  type        = string
  description = "The machine type to run Atlantis on"
  default     = "n1-standard-1"
}

variable "ccm_robot_pat" {
  type = string
}

variable "atlantis_webhook_secret" {
  type = string
}
