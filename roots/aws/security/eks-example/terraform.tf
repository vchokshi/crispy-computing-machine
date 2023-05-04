# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

terraform {

  backend "s3" {
    bucket = "iot4-tfstate"
    key    = "roots/aws/security/eks-example.tfstate"
    region = "us-east-1"
  }

  required_providers {

    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.47.0"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0.4"
    }

    cloudinit = {
      source  = "hashicorp/cloudinit"
      version = "~> 2.2.0"
    }
  }

  required_version = "~> 1.3"
}

