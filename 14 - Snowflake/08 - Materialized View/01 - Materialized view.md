### Different between VIEW and MATERIALIZED VIEW

-   VIEW holds the statement
    so when executed, VIEW get the last updated data

-   MATERIALIZED VIEW holds the data and can be stored on disk
    so the data is not the most recently updated

-   if you have very large table with not frequently changed data, you can use MATERIALIZED VIEW to store result of query (with group by statement) to avoid calculating through all the very large table

### Create a MATERIALIZED VIEW

```
// create materialized view
use snowflake_sample_data;
use schema manage_db.public;
create or replace materialized view orders_mv
as
select
    year(o_orderdate) as year,
    max(o_comment) as max_comment,
    min(o_comment) as min_comment,
    max(o_clerk) as max_clerk,
    min(o_clerk) as min_clerk
from snowflake_sample_data.tpch_sf100.orders
group by year(o_orderdate);

show views;

select * from orders_mv
order by year;
```
