commit = ed9015b6222a33bd0b08f562dd2c683b26e410a5
download:
	curl -Ss -L https://bitbucket.org/atlassianlabs/automatic-cloud-backup/raw/$(commit)/confluence_backup.py > confluence.py
	curl -Ss -L https://bitbucket.org/atlassianlabs/automatic-cloud-backup/raw/$(commit)/jira_backup.py > jira.py
	sed -i '1i\# Open Source code imported for use by IOT4. Use make to update' confluence.py
	sed -i '1i\# Open Source code imported for use by IOT4. Use make to update' jira.py
