```
// Load raw json
create or replace stage manage_db.external_stages.jsonstage
    url = 's3://bucketsnowflake-jsondemo';

create or replace table manage_db.public.json_raw (
    raw_file variant
);

copy into manage_db.public.json_raw
    from @manage_db.external_stages.jsonstage
    file_format = (type = json)
    files = ('HR_data.json');

select * from json_raw;
```
