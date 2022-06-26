#!/bin/sh
set -x
sudo -S mkdir -p /data
sudo -S mkfs.ext4 /dev/xvdb
sudo -S /usr/sbin/blkid -o value -s UUID /dev/xvdb >> /tmp/testfile
sudo -S cat /tmp/testfile
sudo -S echo -e "UUID=$(/usr/sbin/blkid -o value -s UUID /dev/xvdb) /data ext4 defaults 0 0" > /tmp/tempfile
sudo -S cat /tmp/tempfile |sudo -S tee -a /etc/fstab
sudo -S cat /etc/fstab
sudo -S mount -a
