import json
import lambda_function

out = lambda_function.lambda_handler(1,2)

print(json.dumps(out))

