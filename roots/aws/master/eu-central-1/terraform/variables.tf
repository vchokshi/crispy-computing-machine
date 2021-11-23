variable "rds_user" {
  type        = string
  description = "This is the variable used to setup the Postgres DB. Please use TF_VARS_RDS_USER"
}
variable "rds_password" {
  type        = string
  description = "This is the variable used to setup the Postgres DB. Please use TF_VARS_RDS_PASSWORD"
}
variable "region" {
  type        = string
  description = "The region"
  default     = "eu-central-1"

}
