### stream can listen and hold changes on a table

```
// create a stream object
create or replace stream sales_stream on table sales_raw_staging;

show streams;

desc stream sales_stream;

// get all data from stream
select * from sales_stream;

// insert value
insert into sales_raw_staging
    values
        (1, 'blable', 1.99, 2, 3),
        (2, 'blable', 1.99, 2, 5),
        (3, 'blable', 1.99, 2, 4),
        (4, 'blable', 1.99, 2, 1),
        (5, 'blable', 1.99, 2, 2);

create or replace table store_table(
    store_id number,
    location varchar,
    employee number
);

```

### stream can be consumed, after that data of stream will be deleted

```
// consume stream object
insert into sales_final_table
    select
        SA.id,
        SA.product,
        SA.price,
        SA.amount,
        SA.store_id,
        ST.location,
        ST.employee
    from sales_stream as SA
    join store_table as ST on ST.store_id = SA.store_id;

select * from sales_final_table;
```
