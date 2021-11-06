```
// selecting attribute/column -formatted
select raw_file:first_name::string as first_name from manage_db.public.json_raw;

select raw_file:id::int as id from manage_db.public.json_raw;

select
    raw_file:id::int as id,
    raw_file:first_name::string as first_name,
    raw_file:last_name::string as last_name,
    raw_file:gender::string as gender
from manage_db.public.json_raw;

```
