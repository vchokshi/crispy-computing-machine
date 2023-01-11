load_environment_variables() {
  export AWS_PROFILE=iot4
  export DO_PAT=$(pass DO_API_TOKEN)
  export ELASTIO_API_KEY=$(pass elastio)
  export GITHUB_TOKEN=$(pass github)
  export HONEYCOMB_TOKEN=$(pass honeycomb.io)
  export TWILIO_TOKEN=$(pass twillio)
  export OPENAI_API_KEY=$(pass openai_api_key)
  export TF_VAR_atlassian_api_token=$(pass atlassian)
  export TF_VAR_GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID=$(pass github/terraform_cloud_oauth)
  export TF_VAR_do_token=$DO_PAT
}

clear_environment_variables() {
	unset $(compgen -v | grep AWS)
	unset $(compgen -v | grep ELASTIO)
	unset $(compgen -v | grep GITHUB_TOKEN)
	unset $(compgen -v | grep HONEYCOMB_TOKEN)
	unset $(compgen -v | grep TWILIO_TOKEN)
	unset $(compgen -v | grep TF_VAR)
	unset $(compgen -v | grep OPENAI)
}
aws_assume_role() {
  account=$(pass aws/$1/acctnumber)
  ROLE=OrganizationAccountAccessRole
  OUT=$(aws sts assume-role --role-arn arn:aws:iam::$account:role/$ROLE --role-session-name vc@oxygen);\
	export AWS_ACCESS_KEY_ID=$(echo $OUT | jq -r '.Credentials''.AccessKeyId');\
	export AWS_SECRET_ACCESS_KEY=$(echo $OUT | jq -r '.Credentials''.SecretAccessKey');\
	export AWS_SESSION_TOKEN=$(echo $OUT | jq -r '.Credentials''.SessionToken');
  export AWS_PROFILE=$1
}


