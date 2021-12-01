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

# Query 2
Write an SQL statement to display the sum of the extended cost and the number of inventory transactions. The results should include data for shipments (transaction type 5) in calendar years 2011 and 2012. Summarize the result by calendar quarter, customer zip code, and customer name. The result should include the grouped columns and full set of subtotals for every combination of grouped columns. Do not use the CUBE and UNION operators.

```
select 
    c.name,
    c.zip,
    d.CalQuarter,
	count(i.inventoryKey) as total_quantity,
    sum(i.extcost) as total_extcost
from 
	inventory_fact as i,
	date_dim as d,
    cust_vendor_dim as c
where 
	i.datekey = d.datekey
and i.CustVendorKey = c.CustVendorKey    
and i.TransTypeKey = 5    
and (d.CalYear = 2011 or d.CalYear = 2012)
group by  c.name, c.zip, d.CalQuarter with rollup
order by c.name, c.zip, d.CalQuarter
```

# Query 3
Write an SQL statement to display the sum of the extended cost and the sum of the quantity. The results should include data for transfers (transaction type 2). Summarize the result by company name and branch plant name. The result should include the grouped columns and a partial set of subtotals in order of the grouped columns (company name and branch plant name). Transfer quantities by design should sum to zero across all companies so that the grand total should be 0 for the sum of quantity and extended cost. Do not use the GROUPING SETS and UNION operators.

```
select 
    c.companyname,
    b.bpname,
	sum(i.quantity) as total_quantity,
    sum(i.extcost) as total_extcost
from 
	inventory_fact as i,
    branch_plant_dim as b,
    company_dim as c
where 
	i.branchplantkey = b.branchplantkey
and b.companykey = c.companykey
and i.TransTypeKey = 2    
group by  c.CompanyName, b.bpname with rollup
order by c.CompanyName, b.bpname
```

# Query 4
Write an SQL statement to display the sum of the extended cost and the number of inventory transactions. The results should include data for all transaction types. Summarize the result by transaction description, company name, and branch plant name. The result should include the grouped columns and partial totals in order of the grouped columns (transaction description, company name, and branch plant name). Do not use the ROLLUP and UNION operators.

```
select 
	t.TransDescription,
    c.companyname,
    b.bpname,
	sum(i.quantity) as total_quantity,
    count(*) as total_extcost
from 
	inventory_fact as i,
    branch_plant_dim as b,
    company_dim as c,
    trans_type_dim as t
where 
	i.branchplantkey = b.branchplantkey and 
    i.transtypekey = t.transtypekey and 
    b.companykey = c.companykey 
group by t.TransDescription, c.CompanyName, b.bpname with rollup
order by t.TransDescription, c.CompanyName, b.bpname
```