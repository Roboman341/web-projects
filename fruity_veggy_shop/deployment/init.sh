#!/bin/bash

#skip dialog icon about restarting the services
sudo sed -i 's/#$nrconf{restart} = '"'"'i'"'"';/$nrconf{restart} = '"'"'a'"'"';/g' /etc/needrestart/needrestart.conf

sudo apt-get update && sudo apt-get -y upgrade && sudo apt-get -y install python3-pip

# #Ensuring pip is available
# curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
# python3 get-pip.py --user

# #Installing Ansible
# python3 -m pip install --user ansible

# #Upgrading Ansible
# python3 -m pip install --upgrade --user ansible
# python3 -m pip show ansible
