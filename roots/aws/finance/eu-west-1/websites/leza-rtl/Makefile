DOCKER_USERNAME ?= vchokshi
APPLICATION_NAME ?= leza-rtl
build:
	docker build . --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}
push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}
run:
	docker run -p 3000:3000 ${DOCKER_USERNAME}/${APPLICATION_NAME}
