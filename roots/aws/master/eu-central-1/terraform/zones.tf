resource "aws_route53_zone" "iot" {
  name = "internal.iot4.net"
  vpc {
    vpc_id = module.vpc.vpc_id
  }
}
