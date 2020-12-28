# Loop Through a Dictionary
# Print all key names in the dictionary, one by one:
for x in thisdict:
  print(x)
# Print all values in the dictionary, one by one:
for x in thisdict:
  print(thisdict[x])

# Loop through both keys and values, by using the items() method:
for x, y in thisdict.items():
  print(x, y)