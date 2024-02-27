#Pushing to AWS
PUBLIC_REGISTRY ?=public.ecr.aws/n7r0o9o5
PRIVATE_REGISTRY ?=308948682972.dkr.ecr.us-east-1.amazonaws.com
PUBLIC_REPO ?= public_master
PRIVATE_REPO ?= private_master
APPLICATION_NAME ?= fo
GIT_HASH ?= $(shell git log --format="%h" -n 1)

build:
	docker build --tag ${PRIVATE_REGISTRY}/${PRIVATE_REPO}:${GIT_HASH} .

push:
	docker push ${PRIVATE_REGISTRY}/${PRIVATE_REPO}:${GIT_HASH}

release:
	docker pull ${PRIVATE_REGISTRY}/${PRIVATE_REPO}:${GIT_HASH}
	docker tag ${PRIVATE_REGISTRY}/${PRIVATE_REPO}:${GIT_HASH} ${PUBLIC_REGISTRY}/${PUBLIC_REPO}:latest
	docker push ${PUBLIC_REGISTRY}/${PUBLIC_REPO}:latest

clean:
	docker rmi ${PRIVATE_REGISTRY}/${PRIVATE_REPO}:${GIT_HASH}
	docker rmi ${PUBLIC_REGISTRY}/${PUBLIC_REPO}:latest
