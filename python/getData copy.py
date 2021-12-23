import requests, json

#read http-url from api.txt
with open("data/api.txt") as f:
    url = requests.get(f.readline())
text = url.text
data = json.loads(text)

file = open("data/data.json", 'w')
keys = open("data/keys.json", 'r')

json_data = json.load(keys)

# example
# print(data["vakitler"][0]["imsak"])

# iterate keys.json and only print prayertimes marked with 1

i = 0
for key, value in json_data.items():
    if value == 1:
        i += 1

j = 0
file.write("{\n")
file.write("\t\"yesterday\" : [\n")
for key, value in json_data.items():
    if(value == 1):
        x = data["vakitler"][0][key][0]["tarih"]
        x = x.replace(x[:11], '')
        x = x.replace(x[5:], '')
        if(j < i-1):    
            file.write("\t\t\"" + x + "\",\n")
            j += 1
        else:
            file.write("\t\t\"" + x + "\"\n")
file.write("\t],\n")

j = 0
file.write("\t\"today\" : [\n")
for key, value in json_data.items():
    if(value == 1):
        x = data["vakitler"][1][key][0]["tarih"]
        x = x.replace(x[:11], '')
        x = x.replace(x[5:], '')
        if(j < i-1):    
            file.write("\t\t\"" + x + "\",\n")
            j += 1
        else:
            file.write("\t\t\"" + x + "\"\n")
file.write("\t],\n")

j = 0
file.write("\t\"tomorrow\" : [\n")
for key, value in json_data.items():
    if(value == 1):
        x = data["vakitler"][2][key][0]["tarih"]
        x = x.replace(x[:11], '')
        x = x.replace(x[5:], '')
        if(j < i-1):    
            file.write("\t\t\"" + x + "\",\n")
            j += 1
        else:
            file.write("\t\t\"" + x + "\"\n")
file.write("\t]\n")
file.write("}")

file.close
keys.close