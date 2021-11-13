export TF_VAR_aws_region='us-east-2'
export TF_VAR_stack_name='xstack'
export TF_VAR_stack_env='prod'
export TF_VAR_vault_name='xvault'
export ARTIFACTS_PATH='artifacts'
mkdir -p $ARTIFACTS_PATH
bash -i ~/reds-deploy.sh --stack-name $TF_VAR_stack_name --out-dir ./$ARTIFACTS_PATH --aws-region $TF_VAR_aws_region
elastio vault init --vault-name $TF_VAR_vault_name
