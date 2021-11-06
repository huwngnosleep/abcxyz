### SIZE_LIMIT specify maximum size (in bytes) of the data loaded in that command

when exceeding the threshold, the COPY stop loading

```
copy into MANAGE_DB.PUBLIC.ORDERSS (PROFIT, AMOUNT)
    from (select
            s.$2,
            s.$3
            from @MANAGE_DB.external_stages.aws_stage as s)
    file_format= (type = csv field_delimiter=',' skip_header=1)
    files=('OrderDetails.csv')
    size_limit = 1000;
```
