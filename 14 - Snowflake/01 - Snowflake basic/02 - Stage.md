### Stage is just a database object that contains the location where we can load data from

not to be confused this stage with Data Warehouse Stage

### create a stage
```
create or replace database MANAGE_DB;

create or replace schema external_stages;

create or replace stage MANAGE_DB.external_stages.aws_stage
    url='s3://bucketsnowflakes3'
    credentials=(aws_key_id='ABCD_DUMMY_ID' aws_secret_key='123abcd_key');
    
desc stage MANAGE_DB.external_stages.aws_stage;

alter stage aws_stage
    set credentials=(aws_key_id='XYZ_DYMMY_ID' aws_secret_key='123abc');
    
create or replace stage MANAGE_DB.external_stages.aws_stage
    url='s3://bucketsnowflakes3';
    
list @aws_stage;
```

### copy data from stage to DB

```
create or replace table MANAGE_DB.PUBLIC.ORDERS (
    order_id varchar(30),
    amount int,
    profit int,
    quantity int,
    category varchar(30),
    subcategory varchar(30)
);

select * from MANAGE_DB.PUBLIC.ORDERS;

copy into MANAGE_DB.PUBLIC.ORDERS
    from @MANAGE_DB.external_stages.aws_stage
    file_format = (type = csv field_delimiter=',' skip_header=1)
    files = ('OrderDetails.csv')
    
select * from MANAGE_DB.PUBLIC.ORDERS;
```

