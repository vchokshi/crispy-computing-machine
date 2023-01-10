DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= www

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx -f containers/nginx/Dockerfile .
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache -f containers/apache/Dockerfile .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-nginx
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}-apache

