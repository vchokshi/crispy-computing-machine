resource "aws_efs_file_system" "f" {
  creation_token = "${var.region}-efs"
}

output "efs_file_system_dns_name" {
  value = aws_efs_file_system.f.dns_name
}

resource "aws_efs_mount_target" "pri" {
  file_system_id  = aws_efs_file_system.f.id
  subnet_id       = aws_subnet.main.id
  security_groups = [aws_default_security_group.default.id]
}

resource "aws_efs_mount_target" "sec" {
  file_system_id  = aws_efs_file_system.f.id
  subnet_id       = aws_subnet.second.id
  security_groups = [aws_default_security_group.default.id]
}

resource "aws_efs_backup_policy" "policy" {
  file_system_id = aws_efs_file_system.f.id

  backup_policy {
    status = "ENABLED"
  }
}
