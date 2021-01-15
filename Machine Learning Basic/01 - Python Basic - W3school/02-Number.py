x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)
print("c =", c)

# Float can also be scientific numbers with an "e" to indicate the power of 10.
x = 35e3
y = 12E4
z = -87.7e100

print(x)
print(y)
print(z) 

# Complex numbers are written with a "j" as the imaginary part:
x = 3+5j

# Random Number
import random
print(random.randrange(1, 10)) 