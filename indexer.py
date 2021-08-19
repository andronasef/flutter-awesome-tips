import json
import os


tips = {}
files = os.listdir(os.getcwd() + "/public/tips")

for f in (files):
    file = open(os.getcwd() + "/public/tips/" + f)
    title = file.read().split("\n")[0].split("## ")[1]
    tips[f.split(".")[0]] = title

open(os.getcwd() + "/public/tips.json", "w").write(json.dumps(tips))
