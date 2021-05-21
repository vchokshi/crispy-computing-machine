locals {
  repo_root    = dirname(abspath(path.root))
  os_type      = "amazon-linux"
  date         = formatdate("YYYYMMDDhhmmss", timestamp())
  stamped_name = "${var.ami_name_prefix}${local.date}"
  output_name  = var.ami_name == null ? local.stamped_name : var.ami_name
}

variable "subnet_id" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "ami_name_prefix" {
  type    = string
  default = "base-iot4-amazon-linux-"
}

variable "ami_name" {
  type    = string
  default = null
}

variable "date_stamp" {
  type    = bool
  default = true
}

variable "skip_ami" {
  type    = bool
  default = false
}

variable "pr_branch" {
  description = "The PR branch this AMI is based"
  type        = string
  default     = ""
}

source "amazon-ebs" "ami" {
  ami_name = local.output_name

  vpc_id = "${var.vpc_id}"
  subnet_id = "${var.subnet_id}"
  region        = "us-west-2"
  instance_type = "t2.small"
  run_tags = {
    Name    = "${local.output_name}-builder"
    os_type = local.os_type
  }

  source_ami_filter {
    filters = {
      name         = "AmazonInspector-*-AL2_x86_64-gp2"
      architecture = "x86_64"
    }
    owners      = ["amazon"]
    most_recent = true
  }

  encrypt_boot = true

  region_kms_key_ids = {
    #"ap-northeast-1" : "alias/packer"
    #"ap-southeast-2" : "alias/packer"
    #"ca-central-1" : "alias/packer"
    #"eu-central-1" : "alias/packer"
    #"eu-west-1" : "alias/packer"
    #"us-east-1" : "alias/packer"
    #"us-east-2" : "alias/packer"
    #"us-west-1" : "alias/packer"
    "us-west-2" : "alias/packer"
  }

  launch_block_device_mappings {
    device_name           = "/dev/xvdw"
    volume_size           = 8
    delete_on_termination = true
  }

  launch_block_device_mappings {
    device_name           = "/dev/xvdx"
    volume_size           = 8
    delete_on_termination = true
  }

  ssh_username = "ec2-user"

  # This is the list of currently supported regions
  # Extra regions are commented out for development so we don't litter.
  ami_regions = [
    #"ap-northeast-1",
    #"ap-southeast-2",
    #"ca-central-1",
    #"eu-central-1",
    #"eu-west-1",
    #"us-east-1",
    #"us-east-2",
    #"us-west-1",
    "us-west-2"
  ]

  # Need to upgrade to packer 1.7 for this, but it's very handy, so I'm leaving support right now
  skip_create_ami = var.skip_ami

  tags = {
    Name            = local.output_name
    os_type         = local.os_type
    ami_category    = "base"
    approval_status = "testing"
    pr_branch       = "${var.pr_branch}"
  }
}

build {
  sources = [
    "source.amazon-ebs.ami",
  ]

  #provisioner "file" {
    #sources = [
      #"${local.repo_root}/ansible",
      #"${local.repo_root}/scripts"
    #]
    #destination = "/tmp/"
  #}

  #provisioner "shell" {
    #script          = "${local.repo_root}/scripts/standard_image_setup/bootstrap.sh"
    #execute_command = "chmod +x {{ .Path }}; {{ .Vars }} sudo -E -S /bin/bash '{{ .Path }}'"
  #}
  post-processor "manifest" {}
}
