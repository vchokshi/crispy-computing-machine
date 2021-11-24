# Open Source code imported for use by IOT4. Use make to update
# coding=utf-8

# Script created by The Epic Battlebeard 10/08/18
# this script will trigger and download a backup of a CONFLUENCE instance.

# --------- Change log ---------
#
# 2019/11/14 - Script creation

import requests
import time
import re
import argparse

def conf_backup(account, username, token, attachments, folder):

    # global variables
    global backup_response
    global json
    global file_name


    # Set json data to determine if backup to include attachments.
    if attachments in ('Y', 'y'):
        json = b'{"cbAttachments": "true", "exportToCloud": "true"}'
    elif attachments in ('N', 'n'):
        json = b'{"cbAttachments": "false", "exportToCloud": "true"}'

    # Create the full base url for the JIRA instance using the account name.
    url = 'https://' + account + '.atlassian.net/wiki'

    # Open new session for cookie persistence and auth.
    session = requests.Session()
    session.auth = (username, token)
    session.headers.update({"Accept": "application/json", "Content-Type": "application/json"})

    # Start backup
    backup_start = session.post(url + '/rest/obm/1.0/runbackup', data=json)

    # Catch error response from backup start and exit if error found.
    try:
        backup_response = int(re.search('(?<=<Response \[)(.*?)(?=\])', str(backup_start)).group(1))
    except AttributeError:
        print(backup_start.text)
        exit(1)

    # Check backup startup response is 200 if not print error and exit.
    if backup_response != 200:
        print(backup_start.text)
        exit(1)
    else:
        print('Backup starting...')

    progress_req = session.get(url + '/rest/obm/1.0/getprogress')

    # Check for filename match in response
    file_name = str(re.search('(?<=fileName\":\")(.*?)(?=\")', progress_req.text))

    # If no file name match in JSON response keep outputting progress every 10 seconds
    while file_name == 'None':

        progress_req = session.get(url + '/rest/obm/1.0/getprogress')
        # Regex to extract elements of JSON progress response.
        file_name = str(re.search('(?<=fileName\":\")(.*?)(?=\")', progress_req.text))
        estimated_percentage = str(re.search('(?<=Estimated progress: )(.*?)(?=\")', progress_req.text))
        error = 'error'
        # While there is an estimated percentage this will be output.
        if estimated_percentage != 'None':
            # Regex for current status.
            current_status = str(
                re.search('(?<=currentStatus\":\")(.*?)(?=\")', progress_req.text).group(1))
            # Regex for percentage progress value
            estimated_percentage_value = str(
                re.search('(?<=Estimated progress: )(.*?)(?=\")', progress_req.text).group(1))
            print('Action: ' + current_status + ' / Overall progress: ' + estimated_percentage_value)
            time.sleep(10)
        # Once no estimated percentage in response the alternative progress is output.
        elif estimated_percentage == 'None':
            # Regex for current status.
            current_status = str(
                re.search('(?<=currentStatus\":\")(.*?)(?=\")', progress_req.text).group(1))
            # Regex for alternative percentage value.
            alt_percentage_value = str(
                re.search('(?<=alternativePercentage\":\")(.*?)(?=\")', progress_req.text).group(1))
            print('Action: '+ current_status + ' / Overall progress: ' + alt_percentage_value)
            time.sleep(10)
        # Catch any instance of the of word 'error' in the response and exit script.
        elif error.casefold() in progress_req.text:
            print(progress_req.text)
            exit(1)

    # Get filename from progress JSON
    file_name = str(re.search('(?<=fileName\":\")(.*?)(?=\")', progress_req.text))

    # Check filename is not None
    if file_name != 'None':
        file_name = str(re.search('(?<=fileName\":\")(.*?)(?=\")', progress_req.text).group(1))

        print('Backup complete, downloading file to ' + folder)
        print('Backup file can also be downloaded from ' + url + '/wiki/download/' + file_name)

        date = time.strftime("%Y%m%d_%H%M%S")

        filename = account + '_conf_backup_' + date + '.zip'

        file = session.get(url + '/download/' + file_name, stream=True)

        file.raise_for_status()

        with open(folder + filename, 'wb') as handle:
            for block in file.iter_content(1024):
                handle.write(block)

        print(filename + ' downloaded to ' + folder)


def main():

    parser = argparse.ArgumentParser('jira backup')
    parser.add_argument('-s', '--site', help='Your site/account name <account>.atlassian.net')
    parser.add_argument('-u', '--user', help='Your email address for the jira account with admin rights')
    parser.add_argument('-t', '--token', help='API token for the user account')
    parser.add_argument('-a', '--attachments', help='[Y/y] to download with attachments or [N/n] to download without')
    parser.add_argument('-f', '--folder', help='Destination folder for the backup file eg. /folder/sub-folder/')

    args = parser.parse_args()
    site = args.__dict__["site"]
    user_name = args.__dict__["user"]
    api_token = args.__dict__["token"]
    attachments = args.__dict__["attachments"]
    folder = args.__dict__["folder"]


    conf_backup(site, user_name, api_token, attachments, folder)


if __name__ == '__main__':
    main()