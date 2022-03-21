resource "aws_subnet" "main" {
  vpc_id     = aws_default_vpc.default.id
  cidr_block = "172.31.0.0/20"

  tags = {
    Name = "us-west-2c"

  }

}

resource "aws_subnet" "second" {
  vpc_id     = aws_default_vpc.default.id
  cidr_block = "172.31.16.0/20"

  tags = {
    Name = "us-west-2b"

  }

}
