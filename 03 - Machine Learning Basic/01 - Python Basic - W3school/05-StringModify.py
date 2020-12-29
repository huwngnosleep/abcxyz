# Lower Case
a = "Hello, World!"
print(a.lower()) 

# Remove Whitespace
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!" 

# Replace String
a = "Hello, World!"
print(a.replace("H", "J"))
# str.replace(isReplaced, replacer)

# Split String
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!'] 

# String Format
# The format() method takes unlimited number of arguments, and are placed into the respective placeholders:
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))

# You can use index numbers {0} to be sure the arguments are placed in the correct placeholders:
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))