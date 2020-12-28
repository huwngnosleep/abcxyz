class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname()

# Create a Child Class
class Student(Person):
  pass

# Add the __init__() Function
class Student(Person):
  def __init__(self, fname, lname):
    #add properties etc.

# Use the super() Function
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)