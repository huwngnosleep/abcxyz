```
// handling nested data
select raw_file:job.title::string as job_title from manage_db.public.json_raw;

select raw_file:prev_company[0]::string as prev_company from manage_db.public.json_raw;

select
    array_size(raw_file:prev_company) as prev_company_length
from manage_db.public.json_raw;
```
