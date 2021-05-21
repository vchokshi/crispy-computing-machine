resource "aws_dynamodb_table" "terraform_state_lock" {
  name           = "iot4-terraform-lock"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
  tags = {
    Name = var.project_name
  }
}

