DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= black

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}
