### Update action can be known as a Delete and Insert consecutively

```
// deleting one row
delete from sales_raw_staging
where id = 1;

// consume stream object using merge statement
merge
into sales_final_table as f
using sales_stream as s
    on f.id = s.id
when matched
    and s.metadata$action = 'DELETE'
    then delete;

select * from sales_final_table;
```
