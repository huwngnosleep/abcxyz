# Python has no command for declaring a variable.
# A variable is created the moment you first assign a value to it.
x = 5
print(type(x))

# like Javascript
# Variables do not need to be declared with any particular type, and can even change type after they have been set.
x = "hungdzz"
print(x)

# Python allows you to assign values to multiple variables in one line:
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# One Value to Multiple Variables
x = y = z = "Orange"
print(x)
print(y)
print(z)

# Unpack a Collection
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)