# Open Source code imported for use by Gilead. Use make to update
# coding=utf-8

# Script created by The Epic Battlebeard 10/08/18
# this script will trigger and download a backup of a JIRA instance.

# --------- Change log ---------
#
# 13/08/18 - NKW - Added help text function, changed string manipulation from substring to regex for consistency.
# 14/08/18 - NKW - Changed to interactive so can still accept input after compilation. (may change to command line args).
# 01/10/18 - NKW - Added argparser to run from command line.
#

import requests
import time
import re
import argparse

# Constants (DO NOT CHANGE)
JSON_DATA = b'{"cbAttachments": "true", "exportToCloud": "true"}'

def jira_backup(account, username, token, json, folder):

    # Create the full base url for the JIRA instance using the account name.
    url = 'https://' + account + '.atlassian.net'

    # Open new session for cookie persistence and auth.
    session = requests.Session()
    session.auth = (username, token)
    session.headers.update({"Accept": "application/json", "Content-Type": "application/json"})

    # Start backup
    backup_req = session.post(url + '/rest/backup/1/export/runbackup', data=json)

    # Catch error response from backup start and exit if error found.
    if 'error' in backup_req.text:
        print(backup_req.text)
        exit(1)

    # Get task ID of backup.
    task_req = session.get(url + '/rest/backup/1/export/lastTaskId')
    task_id = task_req.text

    # set starting task progress values outside of while loop and if statements.
    task_progress = 0
    last_progress = -1
    global progress_req

    # Get progress and print update until complete
    while task_progress < 100:

        progress_req = session.get(url + '/rest/backup/1/export/getProgress?taskId=' + task_id)

        # Chop just progress update from json response
        try:
            task_progress = int(re.search('(?<=progress":)(.*?)(?=,)', progress_req.text).group(1))
            #print(progress_req.text)
        except AttributeError:
            print(progress_req.text)
            exit(1)

        if (last_progress != task_progress) and 'error' not in progress_req.text:
            print(task_progress)
            last_progress = task_progress
        elif 'error' in progress_req.text:
            print(progress_req.text)
            exit(1)

        if task_progress < 100:
            time.sleep(10)

    if task_progress == 100:

        download = re.search('(?<=result":")(.*?)(?=\",)', progress_req.text).group(1)

        print('Backup complete, downloading files.')
        print('Backup file can also be downloaded from ' + url + '/plugins/servlet/' + download)

        return f'{url}/plugins/servlet/{download}'

        date = time.strftime("%Y%m%d_%H%M%S")

        filename = account + '_backup_' + date + '.zip'

        file = session.get(url + '/plugins/servlet/' + download, stream=True)

        file.raise_for_status()

        with open(folder + filename, 'wb') as handle:
            for block in file.iter_content(1024):
                handle.write(block)

        print(filename + 'downloaded to ' + folder)


def main():

    parser = argparse.ArgumentParser('jira backup')
    parser.add_argument('-s', '--site', help='Your site/account name <account>.atlassian.net')
    parser.add_argument('-u', '--user', help='Your email address for the jira account with admin rights')
    parser.add_argument('-t', '--token', help='API token for the user account')
    parser.add_argument('-f', '--folder', help='Destination folder for the backup file')

    args = parser.parse_args()
    site = args.__dict__["site"]
    user_name = args.__dict__["user"]
    api_token = args.__dict__["token"]
    folder = args.__dict__["folder"]

    jira_backup(site, user_name, api_token, JSON_DATA, folder)


if __name__ == '__main__':
    main()
