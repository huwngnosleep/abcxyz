import re



# The sub() Function
# The sub() function replaces the matches with the text of your choice:
txt = "The rain in Spain"
x = re.sub(" ", "-", txt) 
print(x) #The-rain-in-Spain
# You can control the number of replacements by specifying the count parameter:
x = re.sub(" ", "-", txt, 2)
print(x) #The-rain-in Spain

# Findall()
# The findall() function returns a list containing all matches.
txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x) #['ai', 'ai']

# The search() Function
# The search() function searches the string for a match, and returns a Match object if there is a match.
# only the first occurrence of the match will be returned:

txt = "The rain in Spain"
x = re.search("\s", txt)

print("The first white-space character is located in position:", x.start()) # 3

# The split() Function
# The split() function returns a list where the string has been split at each match:
txt = "The rain in Spain"
x = re.split("\s", txt)
print(x) #['The', 'rain', 'in', 'Spain']