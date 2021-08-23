select *
from orders
where purchase_date <= now() - interval '1year 2 months 30 days'