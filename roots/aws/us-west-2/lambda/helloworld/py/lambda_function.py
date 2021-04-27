print("before import")
import json
import math

print("before lambda_handler")

def lambda_handler(event, context):
    # TODO implement
    print("Inside lambda_handler")

    return {
        'statusCode': 200,
        'body': json.dumps(event)
    }

print("before functionA")
def functionA():
    print("Function A")

print("before functionB")
def functionB():
    print("Function B {}".format(math.sqrt(100)))


print("before __name__ guard")
if __name__ == '__main__':
    functionA()
    functionB()
print("after __name__ guard")
