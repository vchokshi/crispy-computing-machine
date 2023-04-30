if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias grep='grep --color=auto'
fi

alias ll='ls -l'
alias l='ls -CF'

check_deps() {
  command -v pass >/dev/null 2>&1 || { echo >&2 "Error: pass not found"; }
  command -v python3 >/dev/null 2>&1 || { echo >&2 "Error: python3 not found"; }
  command -v gcloud >/dev/null 2>&1 || { echo >&2 "Error: gcloud not found"; }
  command -v aws >/dev/null 2>&1 || { echo >&2 "Error: AWS CLI found"; }
  command -v az >/dev/null 2>&1 || { echo >&2 "Error: Azure CLI not found"; }
  command -v terraform >/dev/null 2>&1 || { echo >&2 "Error: terraform not found"; }
}
check_deps

load_secrets() {
  check_deps
  export AWS_PROFILE=iot4
  export DO_PAT=$(pass DO_API_TOKEN)
  export ATLANTIS_WEBHOOK_SECRET=$(pass atlantis_webhook_secret)
  export CCM_ROBOT_PAT=$(pass ccm-robot-pat)
  export TF_VAR_atlantis_webhook_secret=$ATLANTIS_WEBHOOK_SECRET
  export ELASTIO_API_KEY=$(pass elastio)
  export GITHUB_TOKEN=$(pass github)
  export HONEYCOMB_TOKEN=$(pass honeycomb.io)
  export NEWRELIC_TOKEN=$(pass newrelic_ingest)
  export NEWRELIC_API_KEY=$(pass newrelic_api_key)
  export NEWRELIC_ACCOUNT_NUMBER=$(pass new_relic_account_number)
  export TWILIO_TOKEN=$(pass twillio)
  export OPENAI_API_KEY=$(pass openai_api_key)
  export TF_VAR_atlassian_api_token=$(pass atlassian)
  export TF_VAR_GITHUB_TERRAFORM_CLOUD_OAUTH_TOKEN_ID=$(pass github/terraform_cloud_oauth)
  export TF_VAR_newrelic_token=$NEWRELIC_TOKEN
  export TF_VAR_do_token=$DO_PAT
}

clear_secrets() {
	unset $(compgen -v | grep AWS)
	unset $(compgen -v | grep ATLANTIS)
	unset $(compgen -v | grep CCM_ROBOT)
	unset $(compgen -v | grep ELASTIO)
	unset $(compgen -v | grep GITHUB_TOKEN)
	unset $(compgen -v | grep HONEYCOMB_TOKEN)
	unset $(compgen -v | grep NEWRELIC)
	unset $(compgen -v | grep TWILIO_TOKEN)
	unset $(compgen -v | grep TF_VAR)
	unset $(compgen -v | grep OPENAI)
}

aws_assume_role() {
  account=$(pass aws/$1/acctnumber)
  ROLE=OrganizationAccountAccessRole
  OUT=$(aws sts assume-role --role-arn arn:aws:iam::$account:role/$ROLE --role-session-name vc@control);\
	export AWS_ACCESS_KEY_ID=$(echo $OUT | jq -r '.Credentials''.AccessKeyId');\
	export AWS_SECRET_ACCESS_KEY=$(echo $OUT | jq -r '.Credentials''.SecretAccessKey');\
	export AWS_SESSION_TOKEN=$(echo $OUT | jq -r '.Credentials''.SessionToken');
  export AWS_PROFILE=$1
}

alias asgci="aws sts get-caller-identity"
alias tfi="terraform init"
alias tff="terraform fmt"
alias tfp="tff && terraform plan"
alias tfa="terraform apply"
alias tfaa="terraform apply --auto-approve"
alias gbrv="git branch -r | grep $USER"
alias gbuu="git branch --unset-upstream"
alias gfp="git fetch && git pull"
alias grbi="git rebase -i"
alias gst="git status"
alias ga="git add ."
alias gc="git commit"
alias gp="git push"
alias gpf="git push --force"
alias gcan!="git commit -v -a --no-edit --amend"
alias ghprc="gbuu && gh pr create"
alias rr="source ~/.bashrc"

alias dodns="doctl compute domain records list do.iot4.net"
alias dodrops="doctl compute droplet list"
alias dolbs="doctl compute load-balancer list"

gbsu() {
	git branch --set-upstream-to=origin/$1
}

activate() {
	. ~/.venvs/$1/bin/activate
}

rmenv() {
	rm -rf ~/.venvs/$1
}

makeenv() {
	python3 -m venv ~/.venvs/$1 && activate $1
}

cherrypick() {
    # This needs a help file and a usage instructions.
    if [ -z "$1" ] && [ -z "$2" ]
    then
        echo "Usage cherry-pick [GIT_AUTHOR_DATE] [GIT_COMMITER_DATE] [GIT_HASH]. Uses git lgc output"
        return
    fi

    GIT_AUTHOR_DATE='$1' GIT_COMMITTER_DATE='$2' git cherry-pick $3
}
