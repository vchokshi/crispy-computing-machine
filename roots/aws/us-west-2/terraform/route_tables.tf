
resource "aws_subnet" "1a" {
  vpc_id     = "${aws_vpc.main.id}"
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-west-2a"
  map_public_ip_on_launch = false
  tags {
    Name        = "${var.project_name}"
  }
}
resource "aws_subnet" "1b" {
  vpc_id     = "${aws_vpc.main.id}"
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-west-2b"
  map_public_ip_on_launch = false
   tags {
    Name        = "${var.project_name}"
  }
}
resource "aws_subnet" "1c" {
  vpc_id     = "${aws_vpc.main.id}"
  cidr_block = "10.0.3.0/24"
  availability_zone = "us-west-2c"
  map_public_ip_on_launch = true
  tags {
    Name        = "${var.project_name}"
  }
}
resource "aws_subnet" "1d" {
  vpc_id     = "${aws_vpc.main.id}"
  cidr_block = "10.0.4.0/24"
  availability_zone = "us-west-2a"
  map_public_ip_on_launch = true
  tags {
    Name        = "${var.project_name}"
  }
}

resource "aws_default_route_table" "default" {

  default_route_table_id         = "${aws_vpc.main.main_route_table_id}"
  tags = {
    Name        = "${var.project_name}"
  }

}

resource "aws_route" "default" {
  route_table_id         = "${aws_vpc.main.main_route_table_id}"
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = "${aws_internet_gateway.igw.id}"
}
resource "aws_route_table_association" "1a" {
  subnet_id      = "${aws_subnet.1a.id}"
  route_table_id = "${aws_vpc.main.main_route_table_id}"
}
resource "aws_route_table_association" "1b" {
  subnet_id      = "${aws_subnet.1b.id}"
  route_table_id = "${aws_vpc.main.main_route_table_id}"
}
resource "aws_route_table_association" "1c" {
  subnet_id      = "${aws_subnet.1c.id}"
  route_table_id = "${aws_vpc.main.main_route_table_id}"
}
resource "aws_route_table_association" "1d" {
  subnet_id      = "${aws_subnet.1d.id}"
  route_table_id = "${aws_vpc.main.main_route_table_id}"
}