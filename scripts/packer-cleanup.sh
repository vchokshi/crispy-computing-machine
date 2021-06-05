#!/usr/bin/env sh

#packer-cleanup.sh

#Usage: packer-cleanup.sh [owner] [repo] [run_id]

#What it does: Deletes all artifacts ending in manifest.

RUN_URL="https://api.github.com/repos/$1/$2/actions/runs/$3/artifacts"
URL="https://api.github.com/repos/$1/$2/actions/artifacts"

ARTIFACTS=$(curl $RUN_URL \
	-H "Authorization: token $GITHUB_TOKEN" \
	-H "Accept: application/vnd.github.v3+json" )

for row in $(echo ${ARTIFACTS} | jq -r '.artifacts[] | @base64' ); do
	_jq() {
		echo ${row} | base64 --decode | jq -r ${1}
	}
	
	NAME=$(echo $(_jq '.name'))
	ID=$(echo $(_jq '.id'))

	case "$NAME" in
		*manifest)
			echo $NAME
			echo $ID
			RESP=$(curl -X DELETE $URL/$ID \
				-H "Authorization: token $GITHUB_TOKEN" \
				-H "Accept: application/vnd.github.v3+json" )
			;;
	esac
done
