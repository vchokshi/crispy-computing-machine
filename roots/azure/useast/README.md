# Azure Sandbox

This is azure code for UCLA cybersecurity class.

Requires azure login (`az login`) 

Once logged in, run `terraform apply` for everything except for the web and elk servers.

Once the jumphost is up, ssh into it and generate an ssh key. ssh username is `vihar`.

The publc key will be needed in the root of this directory to be used by the web and elk servers for launch.

Once launched, install `ansible` on the jumphost and use the playbooks in ansible to install filebeat and metric best.

Tools contains some scripts to generate traffic to the sites.
