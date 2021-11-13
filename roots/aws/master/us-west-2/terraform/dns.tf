resource "aws_route53_zone" "internal" {
  name = "internal.iot4.net"
  vpc {
    vpc_id = aws_vpc.main.id
  }
  tags = {
    Name = var.project_name
    Zone = "internal"
  }
}

