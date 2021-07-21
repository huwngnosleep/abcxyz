class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=256)
    # cascade - delete when author deleted
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
