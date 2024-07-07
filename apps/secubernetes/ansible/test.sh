#!/bin/bash

BOOKSTORE=$(curl bookstore.do.iot4.net)
KUBEVIEW=$(curl kubeview.obs.vchokshi.com)

BLACK=$(curl -I black.pen.iot4.net | head -n 1 | cut -d $' ' -f2)
DVWA=$(curl -I dvwa.pen.iot4.net | head -n 1 | cut -d $' ' -f2)
MD=$(curl -I mutillidae.pen.iot4.net | head -n 1 | cut -d $' ' -f2)
WEBGOAT=$(curl -I goat.pen.iot4.net | head -n 1 | cut -d $' ' -f2)
VPN=$(curl vpn.pen.iot4.net)
WORDPRESS=$(curl wordpress.pen.iot4.net)
