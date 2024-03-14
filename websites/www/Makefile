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
	docker pull ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:${GIT_HASH}
	docker tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:${GIT_HASH} ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:latest
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache:latest
	docker pull ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:${GIT_HASH}
	docker tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:${GIT_HASH} ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:latest
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx:latest
