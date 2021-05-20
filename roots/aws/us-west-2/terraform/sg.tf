
##############################################################
# Security Group Creations
##############################################################
resource "aws_security_group" "ELB-SG" {
  name        = "Elastic Load Balancer Security Group"
  description = "Elastic Load Balancer Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"


  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

   tags {
    Name        = "${var.project_name}"
  }
}

resource "aws_security_group" "SSH-SG" {
  name        = "SSH Security Group"
  description = "SSH Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    self        = true
    description = "SSH connection from this sg only"
  }

  ingress {
    from_port   = 22
    to_port     = 22 
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "SSH connection from Anywhere"
  }
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}

resource "aws_security_group" "WWW-SG" {
  name        = "Web Server Security Group"
  description = "Web Server Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    # cidr_blocks = ["0.0.0.0/0"]
    security_groups = ["${aws_security_group.ELB-SG.id}"]
    description = "HTTP Traffic - Terraform Managed"
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}



resource "aws_security_group" "EFS-SG" {
  name        = "Elastic File System Security Group"
  description = "Elastic File System Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"


  ingress {
    from_port   = 2049
    to_port     = 2049
    protocol    = "tcp"
    description = "NFS Traffic for Web Servers - Terraform Managed"
    security_groups =[ "${aws_security_group.WWW-SG.id}"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}



resource "aws_security_group" "RDS-SG" {
  name        = "Relational Database Security Group"
  description = "Relational Database Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"


  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    security_groups =[ "${aws_security_group.WWW-SG.id}"]
    description = "MySQL Traffic for RDS - Terraform Managed"
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}




resource "aws_security_group" "OVPN_SG" {
  name        = "OpenVPN Security Group"
  description = "OpenVPN Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"


  ingress {
    from_port   = 1194
    to_port     = 1194
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}




resource "aws_security_group" "RDP-SG" {
  name        = "Windows RDP Security Group"
  description = "Windows RDP Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 3389
    to_port     = 3389
    protocol    = "tcp"
    description = "RDP from Internal"
    cidr_blocks     = [ "10.0.0.0/16"]

  }
  
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = [ "0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}




resource "aws_security_group" "MC-SG" {
  name        = "Minecraft Security Group"
  description = "Minecraft Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 25565
    to_port     = 25565
    protocol    = "tcp"
    description = "Minecraft from anywhere"
    cidr_blocks     = [ "0.0.0.0/0"]

  }
  
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = [ "0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}




resource "aws_security_group" "HTTP-SG" {
  name        = "HTTP DIRECT Security Group"
  description = "HTTP DIRECT Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTP DIRECT Traffic - Terraform Managed"
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}




resource "aws_security_group" "HTTPS-SG" {
  name        = "HTTPS DIRECT Security Group"
  description = "HTTPS DIRECT Security Group - Terraform Managed"
  vpc_id      = "${aws_vpc.main.id}"

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTPS DIRECT Traffic - Terraform Managed"
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

 tags {
    Name        = "${var.project_name}"
  }
}
