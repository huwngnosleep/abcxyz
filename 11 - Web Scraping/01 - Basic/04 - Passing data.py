# we can passing element between each method by "meta" argument
		yield scrapy.Request(url = absolute_url, 
							callback=self.parse_country, 
							meta={"country_name": name})
    
    def parse_country(self, response):
        name = response.request.meta["country_name"]