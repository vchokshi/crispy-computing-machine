#tfsec:ignore:aws-ec2-require-vpc-flow-logs-for-all-vpcs
#tfsec:ignore:aws-ec2-no-public-ip-subnet
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                     = local.project
  cidr                     = "10.79.0.0/16"
  azs                      = data.aws_availability_zones.available.names
  public_subnets           = ["10.79.8.0/24", "10.79.9.0/24"]
  enable_nat_gateway       = false
  single_nat_gateway       = true
  enable_dns_hostnames     = true
  enable_dns_support       = true
  enable_dhcp_options      = true
  dhcp_options_domain_name = local.dns_hosted_zone_name


  create_database_subnet_group           = false
  create_database_subnet_route_table     = false
  create_database_internet_gateway_route = false
}
output "vpc_id" {
  value = module.vpc.vpc_id
}

#tfsec:ignore:aws-ec2-require-vpc-flow-logs-for-all-vpcs
#tfsec:ignore:aws-ec2-no-public-ip-subnet
module "vpc-east" {
  providers = {
    aws = aws.us-east-1
  }
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                     = local.project
  cidr                     = "10.79.0.0/16"
  azs                      = data.aws_availability_zones.east-available.names
  public_subnets           = ["10.79.8.0/24", "10.79.9.0/24"]
  enable_nat_gateway       = false
  single_nat_gateway       = true
  enable_dns_hostnames     = true
  enable_dns_support       = true
  enable_dhcp_options      = true
  dhcp_options_domain_name = local.dns_hosted_zone_name


  create_database_subnet_group           = false
  create_database_subnet_route_table     = false
  create_database_internet_gateway_route = false
}
output "vpc_east_id" {
  value = module.vpc-east.vpc_id
}

#tfsec:ignore:aws-ec2-require-vpc-flow-logs-for-all-vpcs
#tfsec:ignore:aws-ec2-no-public-ip-subnet
module "vpc-west" {
  providers = {
    aws = aws.us-west-2
  }
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                     = local.project
  cidr                     = "10.79.0.0/16"
  azs                      = data.aws_availability_zones.west-available.names
  public_subnets           = ["10.79.8.0/24", "10.79.9.0/24"]
  enable_nat_gateway       = false
  single_nat_gateway       = true
  enable_dns_hostnames     = true
  enable_dns_support       = true
  enable_dhcp_options      = true
  dhcp_options_domain_name = local.dns_hosted_zone_name


  create_database_subnet_group           = false
  create_database_subnet_route_table     = false
  create_database_internet_gateway_route = false
}
output "vpc_west_id" {
  value = module.vpc-west.vpc_id
}
