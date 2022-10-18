# Azure Sandbox

This is azure code for cybersecurity class.

Requires azure login (`az login`) 

Once logged in, run `terraform apply` for everything except for the web and elk servers.

Once the jumphost is up, ssh into it and generate an ssh key. ssh username is `vchokshi`.

The publc key will be needed in the root of this directory to be used by the web and elk servers for launch.

Once launched, run jumphost.playbook.yml to install the needed files and programs on the jumphost

The hosts will need to be manually added to the pool.

Tools contains some scripts to generate traffic to the sites.
