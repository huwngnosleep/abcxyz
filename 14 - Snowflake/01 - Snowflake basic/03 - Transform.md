### Transform is the process from raw data imported, do something with them to get the right data we need

example: adding auto increment ID

```
create or replace table MANAGE_DB.PUBLIC.ORDERS (
    order_id number autoincrement start 1 increment 1,
    amount int,
    profit int,
    profitable_flag varchar(30)
);

copy into MANAGE_DB.PUBLIC.ORDERS (PROFIT, AMOUNT)
    from (select
            s.$2,
            s.$3
            from @MANAGE_DB.external_stages.aws_stage as s)
    file_format= (type = csv field_delimiter=',' skip_header=1)
    files=('OrderDetails.csv');
```

###### use ON_ERROR to handle exception
```
copy into MANAGE_DB.PUBLIC.ORDERS (PROFIT, AMOUNT)
    from (select
            s.$2,
            s.$3
            from @MANAGE_DB.external_stages.aws_stage as s)
    file_format= (type = csv field_delimiter=',' skip_header=1)
    files=('OrderDetails.csv')
    ON_ERROR = 'SKIP_FILE';

```