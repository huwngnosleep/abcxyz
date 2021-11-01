-- roll up will make all possible combination of the sets
group by 
	rollup (
		extract (year from orderdate),
		extract (month from orderdate),
		extract (day from orderdate),
	)
order by
	extract (year from orderdate),
	extract (month from orderdate),
	extract (day from orderdate),