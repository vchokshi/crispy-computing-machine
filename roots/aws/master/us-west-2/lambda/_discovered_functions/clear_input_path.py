from __future__ import print_function

def lambda_handler(event, context):

    import json
    import urllib

    res = {}

    for dict in event:
        for i in dict:
            res[i] = dict[i]

    return res
