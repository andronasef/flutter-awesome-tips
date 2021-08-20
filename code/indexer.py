import json
import os

dir = os.getcwd() + "/public/tips"
tips = {}
files = os.listdir(dir)

for f in (files):
    file = open(dir + f)
    title = file.read().split("\n")[0].split("## ")[1]
    tips[f.split(".")[0]] = title

open(os.getcwd() + "/public/tips.json", "w").write(json.dumps(tips))
