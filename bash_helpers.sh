iot() {
  export AWS_PROFILE=iot4
  export GITHUB_TOKEN=$(pass github)
  export TF_VAR_atlassian_api_token=$(pass atlassian)
  export TF_VAR_GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID=$(pass github/terraform_cloud_oauth)
  export ELASTIO_API_KEY=$(pass elastio)
  export TWILIO_TOKEN=$(pass twillio)
  export OPENAI_API_KEY=$(pass openai_api_key)
}

assume() {

  if [ $1 = 'backup' ]
  then
      local account=$(pass aws/backup/acctnumber)
  fi
  if [ $1 = 'security' ]
  then
      local account=$(pass aws/security/acctnumber)
  fi
  if [ $1 = 'finance' ]
  then
      local account=$(pass aws/finance/acctnumber)
  fi

  ROLE=OrganizationAccountAccessRole
	OUT=$(aws sts assume-role --role-arn arn:aws:iam::$account:role/$ROLE --role-session-name vc@oxygen);\
	export AWS_ACCESS_KEY_ID=$(echo $OUT | jq -r '.Credentials''.AccessKeyId');\
	export AWS_SECRET_ACCESS_KEY=$(echo $OUT | jq -r '.Credentials''.SecretAccessKey');\
	export AWS_SESSION_TOKEN=$(echo $OUT | jq -r '.Credentials''.SessionToken');
  export AWS_PROFILE=$1
}

none() {
	unset $(compgen -v | grep AWS)
	unset $(compgen -v | grep TF_VAR)
	unset $(compgen -v | grep TWILIO_TOKEN)
	unset $(compgen -v | grep GITHUB_TOKEN)
	unset $(compgen -v | grep ELASTIO)
	unset $(compgen -v | grep OPENAI)
}

