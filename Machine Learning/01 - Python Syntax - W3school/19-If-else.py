a = 2
b = 330

print("A") if a > b else print("B")
# Short Hand If
if a > b: print("a is greater than b")

# Short Hand If ... Else
print("A") if a > b else print("B")

# And
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")

# Or
a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")
