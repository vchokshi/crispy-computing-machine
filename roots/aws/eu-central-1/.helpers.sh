#source this file to get some helpers

export GIT_REPO_PATH=`pwd`

alias pipeline='ansible-playbook -i $GIT_REPO_PATH/ansible/hosts $GIT_REPO_PATH/ansible/main.yml'

unset AWS_INSTANCE_ID

function save() {
	export AWS_INSTANCE_ID=$1
}
export TF_VAR_rds_user=''
export TF_VAR_rds_password=''

alias eclean='ssh-keygen -f "/home/vihar/.ssh/known_hosts" -R "elastio.iot4.net"'

