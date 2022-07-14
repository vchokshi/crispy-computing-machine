#!/bin/sh
set -x
sudo -S mkdir -p /data
sudo -S mkfs.ext4 /dev/sdc
sudo -S blkid -o value -s UUID /dev/sdc >> /tmp/testfile
sudo -S cat /tmp/testfile
sudo -S echo -e "UUID=$(blkid -o value -s UUID /dev/sdc) /data ext4 defaults 0 0" > /tmp/tempfile
sudo -S cat /tmp/tempfile |sudo -S tee -a /etc/fstab
sudo -S cat /etc/fstab
sudo -S mount -a
