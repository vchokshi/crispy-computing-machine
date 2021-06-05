#!/bin/bash

# http://localhost:8000
# un: admin
# pw: cybersecurity

printf '\n%s\n'  "Making sure docker is running..." 
if pgrep docker &> /dev/null
then
  printf '\n%s\n\n' "Docker is running!" 
else
  printf '\n%s\n\n' "Starting docker..."
  if systemctl start docker &> /dev/null
  then
    printf '\n%s\n\n' "Docker has started."
  else
    printf '\n%s\n\n' \
    "Docker cannot be started." \
    "Run 'systemctl start docker' to see error."
    exit
  fi
fi

#force patience function
wait_for_splunk () {
  i=0
  until curl localhost:8000 &> /dev/null
  do 
    printf "."
    sleep 3
    ((i++))
    if [ "$i" -gt 60 ]
    then
      printf '\n%s\n\n' \
      "Splunk isn't launching. Something is wrong." \
      "Try restarting the VM, then restart Docker." \
      "Then run the script again." 
      exit
    fi
  done
}

#wut you want
cat << EOF
What do you want to?

1 - Start Splunk
2 - Stop Splunk
3 - Remove Splunk
4 - Exit
EOF

printf "\nEnter a number: "

read -r choice
case $choice in
  1)
    #is splunk already installed?
    if docker container inspect splunk &> /dev/null
    then 
      if docker ps | grep splunk
      then
        printf '\n%s\n\n' \
        "Looks like Splunk is already running!" \
        "Go to localhost:8000 and start splunking!!!" \
        "Log in with admin:cybersecurity"
        exit
      else
        printf '\n%s\n\n' "Starting splunk..." \
        "Splunk may take a few mins to completely start up. Please wait."
        service docker restart
        docker container start splunk
        wait_for_splunk
        printf '\n%s\n\n' \
        "Splunk is running." \
        "Go to localhost:8000 and start splunking!!!" \
        "Log in with admin:cybersecurity"
        exit
      fi
    else
      printf '\n%s\n\n' "Installing Splunk..."
      # create /splunk/* directories if they don't exist
      if [ ! -d /tmp/splunk/etc ] || [ ! -d /tmp/splunk/var ]
      then
        printf '\n%s\n\n' "Creating /tmp directories..."
        if mkdir -p /tmp/splunk/etc /tmp/splunk/var &> /dev/null
        then
          printf '\n%s\n\n' "Created Splunk Log Directories."
        else
          printf '\n%s\n\n' \
          "Cannot create splunk directories" \
          "Run 'sudo mkdir -p /tmp/splunk/etc /tmp/splunk/var' to see error."
          exit
        fi
      else
        printf '\n%s\n\n' "Verified Splunk Log Directories."
      fi
      
      # start splunk with dir bindings
      printf '\n%s\n\n' "Starting Splunk for the first time!"
      service restart docker
      if docker run --name splunk \
        -d \
        -p 8000:8000 \
        -e "SPLUNK_START_ARGS=--accept-license" \
        -e "SPLUNK_PASSWORD=cybersecurity" \
        --mount type=bind,source=/tmp/splunk/etc,target=/opt/splunk/etc \
        --mount type=bind,source=/tmp/splunk/var,target=/opt/splunk/var \
        splunk/splunk:latest >/dev/null
      then
        printf '\n%s\n\n' \
        "Splunk is installed and starting up." \
        "It may take a few mins to completely start up. Please wait."
        wait_for_splunk
        printf '\n%s\n\n' "Splunk should be up and running!" \
        "Go to localhost:8000 and start splunking!!!" \
        "Log in with admin:cybersecurity"
        exit
      else 
        printf '\n%s\n\n' "The 'docker run' command failed." \
        "Check the docker logs with 'docker logs splunk'"
        exit
      fi
    fi
    ;;
  2)
    #stop splunk, unless it's already stopped!
    if docker ps | grep splunk
    then
      printf '\n%s\n\n' "Stopping Splunk..."
      docker container stop splunk
      printf '\n%s\n\n'  "Splunk has stopped."
      exit
    else
      printf '\n%s\n\n' \
      "Splunk is not running!" \
      "Run the script again and choose another option."
      exit
    fi
    ;;
  3)
    # remove all splunk componets
    printf '\n%s\n\n'  "Removing Splunk..." 
    if [ -d /tmp/splunk/etc ] || [ -d /tmp/splunk/var ]
    then
      printf '\n%s\n\n' "Removing Splunk Folder..."
      rm -rf /tmp/splunk/etc &> /dev/null
      rm -rf /tmp/splunk/var &> /dev/null
    else
      printf '\n%s\n\n' "Splunk folder removed..."      
    fi
    if docker container inspect splunk &> /dev/null
    then
      printf '\n%s\n\n' "Removing container..." 
      docker container stop splunk &> /dev/null
      docker container rm splunk &> /dev/null
      printf '\n%s\n\n' "Removing Splunk container image..." 
      docker image rm splunk/splunk &> /dev/null
      printf '\n%s\n\n' -y | docker image prune -a &> /dev/null
      printf '\n%s\n\n' "Splunk containers and images have been removed."
      exit
    else
      printf '\n%s\n\n' "Looks like Splunk is already uninstalled!!"
      exit
    fi
    ;;
  4)
    printf '\n%s\n\n' "Exiting Splunk Script." 
    exit
    ;;
  *)
    printf '\n%s\n\n' "Invalid choice..." \
    "Run the script again and choose another option."
    exit
    ;;
esac
