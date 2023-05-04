DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= fo

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}
