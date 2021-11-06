### TRUNCATECOLUMNS specifies whether to truncate text string that exceed the target column length

```
copy into MANAGE_DB.PUBLIC.ORDERSS (PROFIT, AMOUNT)
    from (select
            s.$2,
            s.$3
            from @MANAGE_DB.external_stages.aws_stage as s)
    file_format= (type = csv field_delimiter=',' skip_header=1)
    files=('OrderDetails.csv')
    truncatecolumns = true;
```
