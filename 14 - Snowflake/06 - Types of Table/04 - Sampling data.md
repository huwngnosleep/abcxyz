![data-sampling](data-sampling.png)

![sampling-method](sampling-method.png)

### Row or Bernoulli method

```
select *
from snowflake_sample_data.tpcds_sf10tcl.customer_address
sample row (1);
```

### Block or System method

```
select *
from snowflake_sample_data.tpcds_sf10tcl.customer_address
sample system (1);
```
