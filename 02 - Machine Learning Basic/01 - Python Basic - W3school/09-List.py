thislist = list(("apple", "banana", "cherry"))
print(thislist)

# Python Collections (Arrays)
  # List is a collection which is ordered and changeable. Allows duplicate members.
  # Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
  # Set is a collection which is unordered and unindexed. No duplicate members.
  # Dictionary is a collection which is unordered and changeable. No duplicate members.


# Range of Indexes
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
# start at index 2 (included) and end at index 5 (not included).

# Change Item Value
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)

# Change a Range of Item Values
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)

# If you insert more items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist) 

# Insert Items
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)