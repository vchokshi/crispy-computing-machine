
#### EU CENTRAL RESOURCES ####

#tfsec:ignore:aws-ec2-enforce-http-token-imds
#tfsec:ignore:aws-ec2-enable-at-rest-encryption
resource "aws_instance" "e" {
  count                       = length(module.vpc.public_subnets)
  ami                         = data.aws_ami.amazon-linux-2.id
  subnet_id                   = module.vpc.public_subnets[count.index]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.v.key_name
  volume_tags                 = local.common_tags
  tags = merge(
    local.common_tags,
    {
      Name = "bot-${data.aws_region.eu.name}-${count.index}.${local.dns_hosted_zone_name}"
  })
  iam_instance_profile = data.aws_iam_instance_profile.instance_profile.name
}

resource "aws_route53_record" "ssh" {
  count   = length(module.vpc.public_subnets)
  zone_id = data.aws_route53_zone.public.id
  name    = "bot-${data.aws_region.eu.name}-${count.index}.${local.dns_hosted_zone_name}"
  type    = "A"
  ttl     = "300"
  records = [aws_instance.e[count.index].public_ip]
}

output "ssh_hostnames" {
  value = aws_route53_record.ssh[*].name
}

#### US EAST RESOURCES ####

#tfsec:ignore:aws-ec2-enforce-http-token-imds
#tfsec:ignore:aws-ec2-enable-at-rest-encryption
resource "aws_instance" "east" {
  provider                    = aws.us-east-1
  count                       = length(module.vpc-east.public_subnets)
  ami                         = data.aws_ami.east-amazon-linux-2.id
  subnet_id                   = module.vpc-east.public_subnets[count.index]
  instance_type               = local.ec2_instance_type
  associate_public_ip_address = true
  key_name                    = aws_key_pair.w.key_name
  volume_tags                 = local.common_tags
  tags = merge(
    local.common_tags,
    {
      Name = "bot-${data.aws_region.ue.name}-${count.index}.${local.dns_hosted_zone_name}"
  })
  iam_instance_profile = data.aws_iam_instance_profile.instance_profile.name
}

resource "aws_route53_record" "east-ssh" {
  provider = aws.us-east-1
  count    = length(module.vpc-east.public_subnets)
  zone_id  = data.aws_route53_zone.public.id
  name     = "bot-${data.aws_region.ue.name}-${count.index}.${local.dns_hosted_zone_name}"
  type     = "A"
  ttl      = "300"
  records  = [aws_instance.east[count.index].public_ip]
}

output "east-ssh_hostnames" {
  value = aws_route53_record.east-ssh[*].name
}
