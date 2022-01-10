# Partitioning

When using WHERE clause to filter data, we should partition the dataset to remove redundant filter by partitioning dataset to some group with the same properties to filter more easily.

```
CREATE TABLE ...
PARTITION BY (...)
```

![simple-query](simple-query.png)

![partitioning](partitioning.png)

![paritioning-filter](paritioning-filter.png)

### After partitioning, the framework will automatically determine to read that folder or skip

![more-partitioning](more-partitioning.png)

### Dynamic Partitioning

![dynamic-paritioning](dynamic-paritioning.png)

# Bucketing

Bucketing is divided original dataset into groups of many much smaller datasets

![bucketing](bucketing.png)

# Sampling

![sampling](sampling.png)