from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse
from django.template.loader import render_to_string

monthly_challenges = {
    'january': 'eat no meat for the entire month',
    'february': 'walk for at lease 20 minutes ',
    'march': 'learn django',
    'april': 'eat no meat again',
    'may': 'walk for at least 20 minutes',
    'june': 'learn django again',
    'july': 'walk everyday',
    'august': 'walk for at least 20 minutes',
    'september': 'learnnnnn django',
    'october': 'eat no meat for the entire month',
    'november': 'walk for at least 20 minutes everyday',
    'december': None,
}

# Create your views here.

def index(request):
    months = list(monthly_challenges.keys())
    return render(request, 'challenges/index.html', {
        'months': months,
    })
    
def monthly_challenge_number(request, month):

    months = list(monthly_challenges.keys())
    if(month > len(months)):
        return HttpResponseNotFound('Invalid month')

    redirect_month = months[month - 1]

    redirect_path = reverse('month-challenge', args=[redirect_month])
    return HttpResponseRedirect(redirect_path)


def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month]
        return render(request, 'challenges/challenge.html', {
            'text': challenge_text,
            'month': month.capitalize()
        })
    except:
        return HttpResponseNotFound("404 error!")
