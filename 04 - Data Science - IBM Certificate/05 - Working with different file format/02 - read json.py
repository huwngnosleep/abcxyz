import json
with open('filesample.json', 'r') as openfile:
    json_object = json.load(openfile)
print(json_object)