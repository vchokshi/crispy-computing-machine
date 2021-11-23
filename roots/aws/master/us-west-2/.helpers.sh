#export PROD=/home/vihar/Documents/remote/github/iot4-terraform

#echo $fg_bold[green] "Creating lambda tfa for Terraform Apply"

#tfa() {
#TF_VAR_app_version=$IOT4VERSION terraform apply -var 'project_name=viper' -var 'public_key_path=~/.ssh/id_rsa' -var 'key_name=id_rsa' $PROD/terraform
#}

#echo $fg_bold[green] "Creating lambda tfr for Terraform Refresh"

#tfr() {
#TF_VAR_app_version=$IOT4VERSION terraform refresh -var 'project_name=viper' -var 'public_key_path=~/.ssh/id_rsa' -var 'key_name=id_rsa' $PROD/terraform
#}

#echo $fg_bold[green] "Creating lambda tfp for Terraform Plan"

#tfp() {
#TF_VAR_app_version=$IOT4VERSION terraform plan -var 'project_name=viper' -var 'public_key_path=~/.ssh/id_rsa' -var 'key_name=id_rsa'  $PROD/terraform
#}


#echo $fg_bold[green] "Creating lambda jenkins for Automation"


#jenkins() {

 #export IOT4VERSION=`git describe --abbrev=0 --tags`
#
 #export TF_VAR_IOT4VERSION=$IOT4VERSION

 #export PROD=/home/vihar/Documents/iot4-terraform
 #echo $fg_bold[red] "Current version is" $IOT4VERSION

 #echo $fg_bold[yellow] "Zipping up lambda functions for migration"
 #zip -r -j $PROD/lambda/helloworld//hellojs.zip $PROD/lambda/helloworld/js/*
 #zip -r -j $PROD/lambda/helloworld//hellopy.zip $PROD/lambda/helloworld/py/*

 #echo $fg_bold[blue] "Copying lambda functions for to S3"
 #aws s3 cp $PROD/lambda/helloworld/hellojs.zip s3://iot4-lambda-staging/$IOT4VERSION/
 #aws s3 cp $PROD/lambda/helloworld/hellopy.zip s3://iot4-lambda-staging/$IOT4VERSION/

 #echo $fg_bold[green] "Cleaning up artifacts now..."
 #rm $PROD/lambda/helloworld/hellojs.zip
 #rm $PROD/lambda/helloworld/hellopy.zip

 #echo $fg_bold[red] "Syncing images with AWS S3 bucket"
 #aws s3 sync $PROD/yeoman/images s3://iot4-group/images/
#
 #echo $fg_bold[blue] "Deploying yeoman website from dist"
 #aws s3 sync $PROD/yeoman/dist s3://iot4-group/

}

