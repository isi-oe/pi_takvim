from typing import Type
import requests
import json

with open('data/keys.json', "r") as read_file:
    data = json.load(read_file)

f = open("data/data.json", "w") 

f.write("{")

f.write("\n\t\"today\" : {\n")
i = 0
for key, value in data["today"].items():
    if i < 6:
        f.write("\t\t\"" + str(key) + "\"" + " : " + "\"" + requests.get("http://api.thingspeak.com/apps/thinghttp/send_request?api_key=" + str(value)).text + "\",\n")
        i += 1
    else:
        f.write("\t\t\"" + str(key) + "\"" + " : " + "\"" + requests.get("http://api.thingspeak.com/apps/thinghttp/send_request?api_key=" + str(value)).text + "\"\n")
        i += 1
f.write("\t},")

f.write("\n\t\"tomorrow\" : {\n")
i = 0
for key, value in data["tomorrow"].items():
    if i < 6:
        f.write("\t\t\"" + str(key) + "\"" + " : " + "\"" + requests.get("http://api.thingspeak.com/apps/thinghttp/send_request?api_key=" + str(value)).text + "\",\n")
        i += 1
    else:
        f.write("\t\t\"" + str(key) + "\"" + " : " + "\"" + requests.get("http://api.thingspeak.com/apps/thinghttp/send_request?api_key=" + str(value)).text + "\"\n")
        i += 1
f.write("\t}\n")

f.write("}")
f.close