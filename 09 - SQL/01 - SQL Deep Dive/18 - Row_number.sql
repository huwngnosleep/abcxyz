-- row number return the position of current row
select
	row_numer() over(
		partition by category
		order by price
	)
from products