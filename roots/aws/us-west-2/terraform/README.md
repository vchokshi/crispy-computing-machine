# iot4-terraform

This is the production build of IOT4 VPC running the procuction systems.

This branch cleans shit up before I become viper

Make sure to have these in the `.zshrc` file

```bash

viper() {
terraform apply -var 'project_name=viper' -var 'public_key_path=~/.ssh/id_rsa' -var 'key_name=id_rsa'
}

refresh() {
terraform refresh -var 'project_name=viper' -var 'public_key_path=~/.ssh/id_rsa' -var 'key_name=id_rsa'
}

```
