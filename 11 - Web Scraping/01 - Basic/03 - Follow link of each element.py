# we can define a method and call it for each element to follow their link

            yield scrapy.Request(url = absolute_url, callback=self.parse_country)
    
    def parse_country(self, response):
        rows = response.xpath("(//table[@class='table table-striped table-bordered table-hover table-condensed table-list'])[1]/tbody/tr")
        for row in rows:
            year = row.xpath(".//td[1]/text()").get()
            population = row.xpath(".//td[2]/strong/text()").get()

            yield {
                "year": year,
                "population": population,
            }