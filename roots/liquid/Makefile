SHA := $(shell git rev-parse HEAD)

build: 

	docker build -t liquid .

push:

	docker tag liquid:latest vchokshi/liquid:latest
	docker push vchokshi/liquid:latest

