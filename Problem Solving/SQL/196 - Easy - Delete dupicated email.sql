delete t1 
from Person as t1 
join Person as t2 
where t1.Id > t2.Id and t1.Email = t2.Email