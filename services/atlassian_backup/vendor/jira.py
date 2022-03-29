# Open Source code imported for use by author. Use make to update
import re
import time

import requests


def jira_backup(account, username, token, attachments, folder):

    json = b'{"cbAttachments": "false", "exportToCloud": "true"}'

    if attachments in ("Y", "y"):
        json = b'{"cbAttachments": "true", "exportToCloud": "true"}'

    url = "https://" + account + ".atlassian.net"

    session = requests.Session()
    session.auth = (username, token)
    session.headers.update(
        {"Accept": "application/json", "Content-Type": "application/json"}
    )

    backup_req = session.post(url + "/rest/backup/1/export/runbackup", data=json)

    # Catch error response from backup start and exit if error found.
    if "error" in backup_req.text:
        print(backup_req.text)
        exit(1)

    # Get task ID of backup.
    task_req = session.get(url + "/rest/backup/1/export/lastTaskId")
    task_id = task_req.text

    # set starting task progress values outside of while loop and if statements.
    task_progress = 0
    last_progress = -1
    global progress_req

    # Get progress and print update until complete
    while task_progress < 100:

        progress_req = session.get(
            url + "/rest/backup/1/export/getProgress?taskId=" + task_id
        )

        # Chop just progress update from json response
        try:
            task_progress = int(
                re.search('(?<=progress":)(.*?)(?=,)', progress_req.text).group(1)
            )
        except AttributeError:
            print(progress_req.text)
            exit(1)

        if (last_progress != task_progress) and "error" not in progress_req.text:
            last_progress = task_progress
        elif "error" in progress_req.text:
            print(progress_req.text)
            exit(1)

        if task_progress < 100:
            time.sleep(10)

    if task_progress == 100:

        download = re.search('(?<=result":")(.*?)(?=",)', progress_req.text).group(1)

        return f"{url}/plugins/servlet/{download}"
