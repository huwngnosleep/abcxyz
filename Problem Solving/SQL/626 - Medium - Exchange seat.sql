select
    (case
        when mod(id, 2) = 1 and counts != id then id + 1
        when mod(id, 2) = 1 and id = counts then id
        else id - 1
    end) as id,
    student
from 
    seat, 
    (select 
        count(*) as counts 
     from seat) as seat_counts
order by id asc
    