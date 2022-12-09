import os
import openai

import pprint

pp = pprint.PrettyPrinter(indent=1)

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  model="text-babbage-001",
    prompt="Finish this sentence.\n\nVertical farming provides a novel solution for producing food locally, reducing transportation costs",
      temperature=0.29,
        max_tokens=64,
          top_p=1,
            frequency_penalty=0,
              presence_penalty=0,
                stop=["."]
                )
pp.pprint(response)
