```
select 
	count(*) as rowcount,
	itembrand,
	timeyear,
	sum(salesdollar),
	avg(sum(salesdollar)) over (
		partition by timeyear
		order by itembrand, timeyear
		rows between 2 preceding and 2 following
	) as cumsale
from sssales, ssitem, sstimedim
where
	sssales.itemid = ssitem.itemid
and sssales.timeno = sstimedim.timeno
group by itembrand, timeyear
having count(*) > 5
```