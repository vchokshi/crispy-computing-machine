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
