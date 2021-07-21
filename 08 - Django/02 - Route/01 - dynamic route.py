# urls
urlpatterns = [
    path('<str:month>', views.monthly_challenge, name='month-challenge'),

]

# second argument must name the same as url
def monthly_challenge(request, month):
    months = list(monthly_challenges.keys())
    if(month > len(months)):
        return HttpResponseNotFound('Invalid month')

    redirect_month = months[month - 1]

    # dynamic url, using name route will find matching name instead of url
    redirect_path = reverse('month-challenge', args=[redirect_month])
    return HttpResponseRedirect(redirect_path)