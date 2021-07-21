# get all data
Book.objects.all()

# change data
harry_potter = Book.objects.all()[0]
harry_potter.author = 'J K Rowling'
harry_potter.save()

# create
Book.objects.create(title="", author="")