# With the continue statement we can stop the current iteration of the loop, and continue with the next:
# Do not print banana:
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)

# Else in For Loop
for x in range(6):
  print(x)
else:
  print("Finally finished!")

