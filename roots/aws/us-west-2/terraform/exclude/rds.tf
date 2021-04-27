resource "aws_db_subnet_group" "iot4" {
  name       = "iot4"
  subnet_ids = ["${aws_subnet.1a.id}", "${aws_subnet.1b.id}"]
}

resource "aws_db_instance" "prod" {
  identifier = "iot4-prod"
  allocated_storage    = 10
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.small"
  name                 = "iot4"
  username             = ""
  password             = ""
  parameter_group_name = "default.mysql5.7"
  multi_az             = true
  db_subnet_group_name = "${aws_db_subnet_group.iot4.name}"
  vpc_security_group_ids= [ "${aws_security_group.RDS-SG.id}"]
  tags {
    Name        = "${var.project_name}"
  }
}
