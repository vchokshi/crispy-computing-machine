# Crispy Computing Machine

[![Packer Builder](https://github.com/vchokshi/crispy-computing-machine/actions/workflows/packer-builder.yml/badge.svg)](https://github.com/vchokshi/crispy-computing-machine/actions/workflows/packer-builder.yml)

This repo is a collection of Vihar's clouds.

## Available Solutions

### Azure Sandbox

Create an [Azure sandbox](./roots/azure/useast) with a jumphost, two web servers running docker and the darn vulnerable web application container, and an elk server to gather logs.

Vagrant Sandbox
`docker-compose up -d` should raise these boxes. Bookmarks as follows:
http://192.168.13.25/login.php

# Github Actions

packer-builder.yml builds images through github actions.

