module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                     = "${local.project} - vpc"
  cidr                     = "10.4.0.0/16"
  azs                      = data.aws_availability_zones.available.names
  private_subnets          = ["10.4.1.0/24", "10.4.2.0/24", "10.4.3.0/24"]
  public_subnets           = ["10.4.4.0/24", "10.4.5.0/24", "10.4.6.0/24"]
  enable_nat_gateway       = false
  single_nat_gateway       = true
  enable_dns_hostnames     = true
  enable_dns_support       = true
  enable_dhcp_options      = true
  dhcp_options_domain_name = data.aws_route53_zone.public.name


  create_database_subnet_group           = true
  create_database_subnet_route_table     = true
  create_database_internet_gateway_route = true

}

output "vpc_id" {
  value = module.vpc.vpc_id
}
output "subnet_ids" {
  value = module.vpc.public_subnets
}
