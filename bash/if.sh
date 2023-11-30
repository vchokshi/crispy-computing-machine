#!/bin/bash
x=5
y=100

# string variables
str1='this is a string'
str2='this is different string'

# If $x is equal to $y, run the echo command.
if [ $x = $y ]
then
  echo "X is equal to Y!"
fi

# If x is not equal to y, exit the script
if [ $x != $y ]
then
  echo "X does not equal Y"
fi

# If str1 is not equal to str2, run the echo command and exit the script.
if [ "$str1" != "$str2" ]
then
  echo "These strings do not match."
fi

# If x is greater than y, run the echo command - only works for integer values
if [ $x -gt $y ]
then
  echo "$x is greater than $y".
fi

# check if x is less than y - only works for integer values
if [ $x -lt $y ]
then
  echo "$x is less than $y!"
else
  echo "$x is not less than $y!"
fi

# check if $str1 is equal to 'this string' AND $x is greater than $y
# only works if x and y are integers
if [ "$str1" = 'this string' ] && [ $x -gt $y ]
then
  echo "Those strings match and $x is greater than $y!"
else
  echo "Either those strings don't match, or $x is not greater than $y"
fi

# check if $str1 is equal to str2 OR $x is less than $y
# only works if x and y are integers
if [ "$str1" != "$str2" ] || [ $x -lt $y ]
then
  echo "Either those strings don't match OR $x is less than $y!"
else
  echo "Those strings match, AND $x is not less than $y"
fi

# check for the /etc directory
if [ -d /etc ]
then
  echo "The /etc directory exists!"
fi

# check for my_cool_folder
if [ ! -d /my_cool_folder ]
then
  echo "my_cool_folder isn\'t there!"
fi

# check for my_file.txt
if [ -f /my_file.txt ]
then
  echo "my_file.txt is there"
fi

# if sysadmin is running this script, then run an echo command
if [ $USER != 'sysadmin' ]
then
  echo "You are not the sysadmin!"
fi

# if the uid of the user running this script does not equal 1000, run the echo command
if [ $UID -ne 1000 ]
then
  echo "Your UID is wrong"
fi

# if sysadmin is running this script, run the echo command
if [ $(whoami) = 'sysadmin' ]
then
  echo "You are sysadmin!"
fi


#Check if script was run as root. Exit if true.
if [ $UID -eq 0  ]; then
      echo "Please do not run this script as root."
fi

# Define Variables
output=$HOME/research/sys_info.txt
ip=$(ip addr | grep inet | tail -2 | head -1)
execs=$(sudo find /home -type f -perm 777 2>/dev/null)

# Check for research directory. Create it if needed.
if [ ! -d $HOME/research  ]; then
      mkdir $HOME/research
fi

# Check for output file. Clear it if needed.
if [ -f $output  ]; then
      rm $output
fi

echo "A Quick System Audit Script" >>$output
date >>$output
echo "" >>$output
echo "Machine Type Info:" >>$output
echo -e "$MACHTYPE \n" >>$output
echo -e "Uname info: $(uname -a) \n" >>$output
echo -e "IP Info:" >>$output
echo -e "$ip \n" >>$output
echo -e "Hostname: $(hostname -s) \n" >>$output
echo "DNS Servers: " >>$output
cat /etc/resolv.conf >>$output
echo -e "\nMemory Info:" >>$output
free >>$output
echo -e "\nCPU Info:" >>$output
lscpu | grep CPU >>$output
echo -e "\nDisk Usage:" >>$output
df -H | head -2 >>$output
echo -e "\nWho is logged in: \n $(who -a) \n" >>$output
echo -e "\nexec Files:" >>$output
echo "xecs >>$output
echo -e "\nTop 10 Processes" >>$output

