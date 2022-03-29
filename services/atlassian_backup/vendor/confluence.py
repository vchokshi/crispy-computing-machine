# Open Source code imported for use by author. Use make to update
import re
import time

import requests


def conf_backup(account, username, token, attachments, folder):

    global backup_response
    global json
    global file_name

    json = b'{"cbAttachments": "false", "exportToCloud": "true"}'

    if attachments in ("Y", "y"):
        json = b'{"cbAttachments": "true", "exportToCloud": "true"}'

    url = "https://" + account + ".atlassian.net/wiki"

    session = requests.Session()
    session.auth = (username, token)
    session.headers.update(
        {"Accept": "application/json", "Content-Type": "application/json"}
    )

    backup_start = session.post(url + "/rest/obm/1.0/runbackup", data=json)

    # Catch error response from backup start and exit if error found.
    try:
        backup_response = int(
            re.search("(?<=<Response \[)(.*?)(?=\])", str(backup_start)).group(1)
        )
    except AttributeError:
        print(backup_start.text)
        exit(1)

    # Check backup startup response is 200 if not print error and exit.
    if backup_response != 200:
        print(backup_start.text)
        exit(1)

    progress_req = session.get(url + "/rest/obm/1.0/getprogress")

    # Check for filename match in response
    file_name = str(re.search('(?<=fileName":")(.*?)(?=")', progress_req.text))

    # If no file name match in JSON response keep outputting progress every 10 seconds
    while file_name == "None":

        progress_req = session.get(url + "/rest/obm/1.0/getprogress")
        # Regex to extract elements of JSON progress response.
        file_name = str(re.search('(?<=fileName":")(.*?)(?=")', progress_req.text))
        estimated_percentage = str(
            re.search('(?<=Estimated progress: )(.*?)(?=")', progress_req.text)
        )
        error = "error"
        # While there is an estimated percentage this will be output.
        if estimated_percentage != "None":
            # Regex for current status.
            current_status = str(
                re.search('(?<=currentStatus":")(.*?)(?=")', progress_req.text).group(1)
            )
            # Regex for percentage progress value
            estimated_percentage_value = str(
                re.search(
                    '(?<=Estimated progress: )(.*?)(?=")', progress_req.text
                ).group(1)
            )
            time.sleep(10)

        # Once no estimated percentage in response the alternative progress is output.
        elif estimated_percentage == "None":
            # Regex for current status.
            current_status = str(
                re.search('(?<=currentStatus":")(.*?)(?=")', progress_req.text).group(1)
            )
            # Regex for alternative percentage value.
            alt_percentage_value = str(
                re.search(
                    '(?<=alternativePercentage":")(.*?)(?=")', progress_req.text
                ).group(1)
            )
            time.sleep(10)
        # Catch any instance of the of word 'error' in the response and exit script.
        elif error.casefold() in progress_req.text:
            print(progress_req.text)
            exit(1)

    file_name = str(re.search('(?<=fileName":")(.*?)(?=")', progress_req.text))

    if file_name != "None":
        file_name = str(
            re.search('(?<=fileName":")(.*?)(?=")', progress_req.text).group(1)
        )
        return f"{url}/download/{file_name}"
