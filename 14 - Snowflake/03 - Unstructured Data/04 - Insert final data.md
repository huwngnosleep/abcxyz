```
create or replace table languages as
select
    raw_file:first_name::string as first_name,
    f.value:language::string as first_language,
    f.value:level::string as level_spoken
from
    manage_db.public.json_raw,
    table(flatten(raw_file:spoken_languages)) as f;

```
