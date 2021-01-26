# Save this code in a file named myModule.py
def greeting(name):
  print("Hello, " + name)

import mymodule
mymodule.greeting("Jonathan")

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}

import mymodule

a = mymodule.person1["age"]
print(a)

# Re-naming a Module
import mymodule as mx

a = mx.person1["age"]
print(a)

# There is a built-in function to list all the function names (or variable names) in a module
# dir() function:

import platform

x = dir(platform)
print(x)
