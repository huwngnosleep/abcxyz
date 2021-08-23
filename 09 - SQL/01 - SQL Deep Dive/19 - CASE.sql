select 
	orderid,
	customerid,
	case
		when customerid = 1
		then 'hello'
		else 'hi'
	end
from orders 
order by customerid