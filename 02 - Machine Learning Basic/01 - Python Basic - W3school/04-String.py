# print inline
print('Hello', end=" ")
print('World')

# Multiline Strings
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""

# Strings are Arrays
a = "Hello, World!" # a[1] = "e"

# Since strings are arrays, we can loop through the characters with a for loop.
for x in "banana":
  print(x)

# length
a = "Hello, World!"
print(len(a))

# Check String
txt = "Freedom is not free!"
print("free" in txt)

# Slicing String
b = "Hello, World!"
print(b[2:5])
# Slice From the Start
b = "Hello, World!"
print(b[:5])
# Slice To the End
b = "Hello, World!"
print(b[2:]) 

# Negative Indexing
b = "Hello, World!"
print(b[-5:-2]) # orl

