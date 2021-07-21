jkrowling = Author(first_name="J.K", last_name = 'Rowling')
jkrowling.save()

hp1 = Book(title="hp", rating=5, author=jkrowling)
hp1.save()