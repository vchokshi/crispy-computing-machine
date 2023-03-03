resource "aws_subnet" "aa" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-west-2a"
  map_public_ip_on_launch = false
  tags = {
    Name = var.project_name
  }
}

resource "aws_subnet" "ab" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-west-2b"
  map_public_ip_on_launch = false
  tags = {
    Name = var.project_name
  }
}

resource "aws_subnet" "ac" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.3.0/24"
  availability_zone       = "us-west-2c"
  map_public_ip_on_launch = true
  tags = {
    Name = var.project_name
  }
}

resource "aws_subnet" "ad" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.4.0/24"
  availability_zone       = "us-west-2a"
  map_public_ip_on_launch = true
  tags = {
    Name = var.project_name
  }
}

resource "aws_default_route_table" "default" {
  default_route_table_id = aws_vpc.main.main_route_table_id
  tags = {
    Name = var.project_name
  }
}

resource "aws_route" "default" {
  route_table_id         = aws_vpc.main.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

resource "aws_route_table_association" "aa" {
  subnet_id      = aws_subnet.aa.id
  route_table_id = aws_vpc.main.main_route_table_id
}

resource "aws_route_table_association" "ab" {
  subnet_id      = aws_subnet.ab.id
  route_table_id = aws_vpc.main.main_route_table_id
}

resource "aws_route_table_association" "ac" {
  subnet_id      = aws_subnet.ac.id
  route_table_id = aws_vpc.main.main_route_table_id
}

resource "aws_route_table_association" "ad" {
  subnet_id      = aws_subnet.ad.id
  route_table_id = aws_vpc.main.main_route_table_id
}
