# A set is a collection which is both unordered and unindexed.
 # Sets are unordered, so you cannot be sure in which order the items will appear.
 # Set do not allow duplicate values
thisset = {"apple", "banana", "cherry", "apple"}
print(thisset)

# Once a set is created, you cannot change its items, but you can add new items.

# Add Items
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)

# Update set
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)

thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)

# Remove Item
thisset.remove("banana")
# If the item to remove does not exist, remove() will raise an error.
thisset.discard("banana")
# If the item to remove does not exist, discard() will NOT raise an error.