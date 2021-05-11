import pandas as pd
import xml.etree.ElementTree as etree
tree = etree.parse('filesample.xml')
root = tree.getroot()
columns = ["Name", "Phone Number", "Birthday"]
df = pd.DataFrame(columns= columns)

for node in root:
    name = node.find("name").text
    phonenumber = node.find("phonenumber").text
    birthday = node.find("birthday").text

df = df.append(pd.Series([name, phonenumber, birthday], index = columns))