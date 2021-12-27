import requests, json

#read http-url from api.txt
with open("data/api.txt") as f:
    url = requests.get(f.readline())
text = url.text
data = json.loads(text)

file = open("data/data.json", 'w')
keys = open("data/keys.json", 'r')

json_data = json.load(keys)

i = 0
for key, value in json_data.items():
    if value == 1:
        i += 1

k = 0
l = 0
file.write("{\n")
while(k < 4):
    j = 0
    if(k == 0):
        file.write("\t\"yesterday\" : [\n")
    if(k == 1):
        file.write("\t\"today\" : [\n")
    if(k == 2):
        file.write("\t\"tomorrow\" : [\n")
    if(k == 3):
        file.write("\t\"times\" : [\n")
    for key, value in json_data.items():
        if(value == 1):
            if(k < 3):
                x = data["vakitler"][l][key][0]["tarih"]
                x = x.replace(x[:11], '')
                x = x.replace(x[5:], '')
                if(j < i-1):    
                    file.write("\t\t\"" + x + "\",\n")
                    j += 1
                else:
                    file.write("\t\t\"" + x + "\"\n")
            else:
                if(j < i-1):    
                    file.write("\t\t\"" + key + "\",\n")
                    j += 1
                else:
                    file.write("\t\t\"" + key + "\"\n")
    if(k < 3):
        file.write("\t],\n")
    else:
        file.write("\t]\n")
    l += 1
    k += 1
file.write("}")

file.close
keys.close