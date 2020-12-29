import re

phoneNumber = "0366-465-302"
x = re.sub('-', '', phoneNumber)
print(x)

phoneNumber = ["0366-465-302", "0366.465.302", "0366 465 302"]
for number in phoneNumber:
    x = re.sub("[- .]", '', number)
    print(x)