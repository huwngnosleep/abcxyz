select c.name as 'Customers'
from customers as c
left join orders as o
on o.customerId = c.id
where o.id is null