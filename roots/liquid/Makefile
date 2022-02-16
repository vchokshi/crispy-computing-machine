SHA := $(shell git rev-parse HEAD)

build: 

	docker build -t global .

push:

	docker tag global:latest 308948682972.dkr.ecr.us-east-1.amazonaws.com/global:latest
	docker push 308948682972.dkr.ecr.us-east-1.amazonaws.com/global:latest

