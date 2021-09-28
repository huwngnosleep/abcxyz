# spiders can only view the web page in no-javascript version

# to scrap a web page

request = scrapy.Request(url="https://www.worldometers.info/world-population/population-by-country/")

fetch(request)

# get title 
title = response.xpath("//h1/text()")

title
# [<Selector xpath='//h1/text()' data='Countries in the world by population ...'>]

# country is a tag wrapped around by td tag
# so to get all countries
countries_css = response.css("td a::text").getall()