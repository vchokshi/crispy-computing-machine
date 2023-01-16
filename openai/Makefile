DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= openai

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}

run:
	docker run -i -t --rm --name ${APPLICATION_NAME} -p 5888:5000 ${DOCKER_USERNAME}/${APPLICATION_NAME}

up: build run 

