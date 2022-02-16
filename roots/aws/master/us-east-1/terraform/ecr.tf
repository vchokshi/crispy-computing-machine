# Add ECR for the dummy website

resource "aws_ecr_repository" "master" {
  name                 = "global"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true

  }

}

output "ecr_repo_url" {
  value = aws_ecr_repository.master.repository_url
}
