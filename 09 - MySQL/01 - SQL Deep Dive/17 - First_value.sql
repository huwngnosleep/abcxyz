-- first_value return the first row of a subset
select 
	price,
	first_value(price) over(
		partition by category order by price
	)
from products

-- last_value is the same