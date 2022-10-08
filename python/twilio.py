from twilio.rest import Client

account_sid = 'ACc2d32d72d064b84dcc3d2e65b232df78'
auth_token = derp
client = Client(account_sid, auth_token)

m = client.messages.create(
	to='+14802364424',
	messaging_service_sid='MG74df09439bb4d388bfc9ce413f874bb9',
	body = 'Hello Vihar'
)

print(m.sid)
