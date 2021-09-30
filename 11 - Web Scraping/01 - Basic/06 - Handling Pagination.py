# get css of next button and follow a request

next_page = response.xpath("(//a[@class='nextPage'])[1]/@href").get()

if next_page:
    yield scrapy.Request(url=next_page, callback=self.parse)
