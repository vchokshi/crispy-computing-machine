resource "aws_subnet" "main" {
  vpc_id                  = aws_default_vpc.default.id
  cidr_block              = "172.31.0.0/20"
  availability_zone       = "us-west-2a"
  map_public_ip_on_launch = true

  tags = {
    Name = "us-west-2a"

  }

}

resource "aws_subnet" "second" {
  vpc_id                  = aws_default_vpc.default.id
  cidr_block              = "172.31.16.0/20"
  availability_zone       = "us-west-2b"
  map_public_ip_on_launch = true

  tags = {
    Name = "us-west-2b"

  }

}
