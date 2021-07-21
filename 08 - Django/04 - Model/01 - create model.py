from django.db import models

# Create your models here.

class Book(models.Model):
    id = models.inc
    title = models.CharField(max_length=256)
    rating = models.IntegerField()

# command
# python3 manage.py makemigrations
# python3 manage.py migrate

# those commands will create a database in sqlite3 file
harry_potter = Book(title="abcdxyz")

# this method will automatically save this object to database
harry_potter.save()
