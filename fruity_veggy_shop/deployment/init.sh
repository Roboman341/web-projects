#!/bin/bash

#skip dialog icon about restarting the services
sudo sed -i 's/#$nrconf{restart} = '"'"'i'"'"';/$nrconf{restart} = '"'"'a'"'"';/g' /etc/needrestart/needrestart.conf

sudo apt-get update && sudo apt-get -y upgrade && sudo apt-get -y install python3-pip