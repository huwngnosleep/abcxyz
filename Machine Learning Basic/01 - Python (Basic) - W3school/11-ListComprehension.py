newlist = [x for x in range(10)] 
print(newlist)

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []
for x in fruits:
  if "a" in x:
    newlist.append(x)
print(newlist) 

# With list comprehension you can do all that with only one line of code:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist) 

# The Syntax
# newlist = [expression for item in iterable if condition == True] 

# You can set the outcome to whatever you like:
newlist = ['hello' for x in fruits] 
print(newlist)

# The expression can also contain conditions, not like a filter, but as a way to manipulate the outcome:
newlist = [x if x != "banana" else "orange" for x in fruits]
print(newlist) 
# "Return the item if is not banana, if it is banana return orange".