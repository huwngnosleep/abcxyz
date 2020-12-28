# Get the value of the "model" key:
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]

# Get Items
# The items() method will return each item in a dictionary, as tuples in a list.
x = thisdict.items()
print(x)

# Check if Key Exists
if "model" in thisdict:
  print("Yes")

# Change Values
thisdict["year"] = 2018

# Update Dictionary
# Update the "year" of the car by using the update() method:
thisdict.update({"year": 2020})
print(thisdict)

# Adding Items
thisdict["color"] = "red"

# Removing Items
# The pop() method removes the item with the specified key name:
thisdict.pop("model")
print(thisdict)



