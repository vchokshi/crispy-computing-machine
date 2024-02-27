#tfsec:ignore:aws-ecr-repository-customer-key
resource "aws_ecr_repository" "private" {
  name                 = "private_master"
  image_tag_mutability = "IMMUTABLE"
  image_scanning_configuration {
    scan_on_push = true
  }

}

output "ecr_repo_url" {
  value = aws_ecr_repository.private.repository_url
}


#tfsec:ignore:aws-ecr-repository-customer-key
resource "aws_ecrpublic_repository" "public" {
  repository_name = "public_master"
}

output "ecr_url" {
  value = aws_ecrpublic_repository.public.repository_uri
}
