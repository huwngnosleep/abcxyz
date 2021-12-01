# Query 1
Write an SQL statement to display the sum of the extended cost and the sum of the quantity. The results should include data for shipments (transaction type 5) in calendar year 2011. Summarize the result by calendar month and Address Category Code 1. The result should include the grouped columns and the full totals for every combination of grouped columns. Do not use the GROUPING SETS and UNION operators.


```
select 
	d.CalMonth,
    c.AddrCatCode1,
	sum(i.quantity) as total_quantity,
    sum(i.extcost) as total_extcost
from 
	inventory_fact as i,
	date_dim as d,
    cust_vendor_dim as c,
    addr_cat_code1 as a
where 
	i.datekey = d.datekey
and i.CustVendorKey = c.CustVendorKey    
and c.AddrCatCode1 = a.AddrCatCodeKey
and i.TransTypeKey = 5    
and d.CalYear = 2011
group by d.CalMonth, c.addrcatcode1 with rollup 
order by d.calmonth, c.addrcatcode1 
```