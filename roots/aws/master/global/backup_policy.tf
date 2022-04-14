resource "aws_organizations_policy" "backup" {
  name    = "organization-backup-policy"
  type    = "BACKUP_POLICY"
  content = file("${path.module}/backup_policy.json")
}
resource "aws_organizations_policy_attachment" "backup" {
  policy_id = aws_organizations_policy.backup.id
  target_id = aws_organizations_organization.org.roots[0].id

}
