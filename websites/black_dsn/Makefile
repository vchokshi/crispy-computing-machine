REGISTRY ?= registry.digitalocean.com
REPO ?= do
APPLICATION_NAME ?= black
GIT_HASH ?= $(shell git log --format="%h" -n 1)

build:
	docker build --platform linux/amd64 --tag ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH} .

push:
	docker push ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH}


release:
	docker pull ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH}
	docker tag ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH} ${REGISTRY}/${REPO}/${APPLICATION_NAME}:latest
	docker push ${REGISTRY}/${REPO}/${APPLICATION_NAME}:latest
