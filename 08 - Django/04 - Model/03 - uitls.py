from django.db.models import Avg

books = Book.objects.all().order_by('title')
num_books = books.count()
avg_rating = books.aggregate(Avg('rating'))