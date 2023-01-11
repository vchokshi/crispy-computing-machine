import os
import openai
import pprint

pp = pprint.PrettyPrinter(indent=1)

#openai.organization = "Iot4"
openai.api_key = os.getenv("OPENAI_API_KEY")
pp.pprint(openai.Model.list())
