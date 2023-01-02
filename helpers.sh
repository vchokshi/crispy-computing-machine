load_environment_variables() {
  export AWS_PROFILE=iot4
  export GITHUB_TOKEN=$(pass github)
  export TF_VAR_atlassian_api_token=$(pass atlassian)
  export TF_VAR_GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID=$(pass github/terraform_cloud_oauth)
  export ELASTIO_API_KEY=$(pass elastio)
  export TWILIO_TOKEN=$(pass twillio)
  export OPENAI_API_KEY=$(pass openai_api_key)
  export DO_PAT=$(pass DO_API_TOKEN)
  export TF_VAR_do_token = $DO_PAT
}

clear_environment_variables() {
	unset $(compgen -v | grep AWS)
	unset $(compgen -v | grep TF_VAR)
	unset $(compgen -v | grep TWILIO_TOKEN)
	unset $(compgen -v | grep GITHUB_TOKEN)
	unset $(compgen -v | grep ELASTIO)
	unset $(compgen -v | grep OPENAI)
}
