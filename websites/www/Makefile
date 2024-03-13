DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= www
GIT_HASH ?= $(shell git log --format="%h" -n 1)

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:${GIT_HASH} -f containers/apache/Dockerfile .
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:${GIT_HASH} -f containers/nginx/Dockerfile .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:${GIT_HASH}
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:${GIT_HASH}

release:
	docker pull ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH}
	docker tag ${REGISTRY}/${REPO}/${APPLICATION_NAME}:${GIT_HASH} ${REGISTRY}/${REPO}/${APPLICATION_NAME}:latest
	docker push ${REGISTRY}/${REPO}/${APPLICATION_NAME}:latest
