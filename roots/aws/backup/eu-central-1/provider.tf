provider "aws" {
  region = "eu-central-1"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}

provider "aws" {
  alias  = "us-west-2"
  region = "us-west-2"
  allowed_account_ids = [
    "438513923646",
    "308948682972",
  ]
  assume_role {
    role_arn = "arn:aws:iam::438513923646:role/OrganizationAccountAccessRole"

  }
}

terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      version               = "~> 4.14"
      configuration_aliases = [aws.us-east-1, aws.us-west-2]
    }
  }
  backend "s3" {
    bucket     = "iot4-tfstate"
    key        = "roots/aws/backup/eu-central-1.tfstate"
    region     = "us-east-1"
    kms_key_id = "arn:aws:kms:us-east-1:308948682972:key/6b8b0015-5fd2-4ac0-a412-10f16c2e4d71"
  }


}
