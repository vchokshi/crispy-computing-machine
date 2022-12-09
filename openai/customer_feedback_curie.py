import os
import openai

import pprint

pp = pprint.PrettyPrinter(indent=1)

openai.api_key = os.getenv("OPENAI_API_KEY")
response = openai.Completion.create(
  model="text-curie-001",
  prompt="Read this customer response then answer the following questions:\n\n\"\"\"\nOn March 22 I bought a copy of your game World War Mice. While I enjoyed the beginning of the game I thought the later levels weren't that exciting and the game play was either too easy or impossible. I also thought the graphics were really subpar compared to what was in the video game trailer. I think you can do better and fix it with an update.\n\"\"\"\n\nQuestions:\n1. What product was this about?\n2. Did the customer have complaints?\n3. What was their main comment about the product?\n5. Was the customer polite?\n\nAnswers:\n1.",
  temperature=0.1,
  max_tokens=64,
  top_p=1,
  frequency_penalty=0.37,
  presence_penalty=0,
  stop=["\n\n"]
)
pp.pprint(response)
