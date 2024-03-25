#registry is dockerhub by default
DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= vpn
GIT_HASH ?= $(shell git log --format="%h" -n 1)


build:
	docker build -t ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH}

release:
	docker pull ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH}
	docker tag  ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH} ${DOCKER_USERNAME}/${APPLICATION_NAME}
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}:latest
