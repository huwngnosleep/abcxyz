select distinct a.email
from person as a
join person as b
on a.email = b.email and a.id != b.id