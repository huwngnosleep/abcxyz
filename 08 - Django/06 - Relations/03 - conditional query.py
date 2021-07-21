books_by_rowling = Book.objects.filter(author__last_name = 'Rowling')

books_by_rowling = Book.objects.filter(author__last_name__contains='wling')