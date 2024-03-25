NAMESPACE ?= vchokshi
APPLICATION_NAME ?= leza
GIT_HASH ?= $(shell git log --format="%h" -n 1)

build:
	docker build --platform linux/amd64 --tag ${NAMESPACE}/${APPLICATION_NAME}:${GIT_HASH} .
push:
	docker push ${NAMESPACE}/${APPLICATION_NAME}:${GIT_HASH}

release:
	docker pull ${NAMESPACE}/${APPLICATION_NAME}:${GIT_HASH}
	docker tag ${NAMESPACE}/${APPLICATION_NAME}:${GIT_HASH} ${NAMESPACE}/${APPLICATION_NAME}:latest
	docker push ${NAMESPACE}/${APPLICATION_NAME}:latest
