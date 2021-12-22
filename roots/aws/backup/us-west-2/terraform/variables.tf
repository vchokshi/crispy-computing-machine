variable "atlassian_api_token" {
  type        = string
  description = "The api token for iot4 atlassian account"
}
variable "region" {
  type        = string
  description = "The region"
  default     = "us-west-2"
}
