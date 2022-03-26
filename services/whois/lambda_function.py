import requests
import os

def lambda_handler(event, context):
  URL = "https://domain-reputation.whoisxmlapi.com/api/v1"

  API_KEY = os.environ['WHOISXML_API_KEY']

  PARAMS = {'apiKey':API_KEY, 'domainName':'iot4.net'}
  r = requests.get(url= URL, params = PARAMS)
  if r.status_code != 200:
      # This means something went wrong.
      raise ApiError('GET {} {}'.format(r.status_codei, URL))

  d = r.json()

  for k,v in d.items():
      print('{}: {}'.format(k, v))

  return(0)
