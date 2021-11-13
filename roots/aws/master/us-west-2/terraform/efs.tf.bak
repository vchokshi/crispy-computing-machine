##############################################################
# EFS Stuff
##############################################################
resource "aws_efs_file_system" "efs" {}

resource "aws_efs_mount_target" "efs-mount-target-1c" {
  file_system_id = "${aws_efs_file_system.efs.id}"
  subnet_id      = "${aws_subnet.1c.id}"
  security_groups = ["${aws_security_group.EFS-SG.id}"]
}
resource "aws_efs_mount_target" "efs-mount-target-1d" {
  file_system_id = "${aws_efs_file_system.efs.id}"
  subnet_id      = "${aws_subnet.1d.id}"
  security_groups = ["${aws_security_group.EFS-SG.id}"]
}
