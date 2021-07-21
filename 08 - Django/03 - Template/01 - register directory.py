# views
from django.template.loader import render_to_string

def monthly_challenge(request, month):
    response_data = render_to_string('challenges/challenge.html')
    return HttpResponse(response_data)

# app.py
INSTALLED_APPS = [
    'challenges',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]