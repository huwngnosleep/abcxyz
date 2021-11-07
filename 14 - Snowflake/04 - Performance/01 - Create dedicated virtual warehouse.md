### create more virtual warehouse can bring more performance

```
// create virtual warehouse for Data Scientist

create warehouse DS_WH
with warehouse_size = 'small'
warehouse_type = 'standard'
auto_suspend = 300
auto_resume = true
min_cluster_count = 1
max_cluster_count = 1
scaling_policy = 'standard';

// create role for Data Scientist
create role data_scientist;
grant usage on warehouse DS_WH to role data_scientist;

// create user with roles
create user ds1 password = 'ds1'
login_name = 'ds1'
default_role = 'data_scientist'
default_warehouse = 'DS_WH'
must_change_password = false;

grant role data_scientist to user ds1;

```
