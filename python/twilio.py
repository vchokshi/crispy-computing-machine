from twilio.rest import Client

account_sid = ''
auth_token = derp
client = Client(account_sid, auth_token)

m = client.messages.create(
	to='+14802364424',
	messaging_service_sid='MG74df09439bb4d388bfc9ce413f874bb9',
	body = 'Hello Vihar'
)

print(m.sid)
