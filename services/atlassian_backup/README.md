# Atlassian Backup Using Elastio

```
atlassian_backup [-h] [--use-ssm] [-d] [--include-attachments] [--region REGION]

Atlassian Backup with Elastio

optional arguments:
  -h, --help            show this help message and exit
  --use-ssm             Use SSM for Secrets
  -d, --directory       Directory where to store temporary download files
  --include-attachments Whether to include Atlassian Attachments
  --region REGION       The REGION to scan (default: us-east-1)
```
### Secrets

Atlassian backup requires three secrets, a site, username, and token.

These secrets can be stored in ssm as 
```
/atlassian/site
/atlassian/user
/atlassian/api_token
```

Alternatively, the secrets can be passed in via environment variables:

```
export ATLASSIAN_SITE = "your_site_url"
export ATLASSIAN_USER = "your_site_user"
export ATLASSIAN_TOKEN = "your_site_token"
```

## Known Issues

### Download of large files times out.

When including attachments, the download file size can get rather large. To seperate scope of conerns, download is kept seperate from protect to ensure protect only starts on successful downloads.


