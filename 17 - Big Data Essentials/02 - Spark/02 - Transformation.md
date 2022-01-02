# Transformation allow to create new RDDs from the existing RDDs
The transformed RDD depends on the source RDD to be useful

# Some transformation
![filter](filter.png)

![map](map.png)

# A transformation must have characteristic of an RDD
- Partition
- Iterable
- Dependencies

**All transformation is LAZY**, they compute the result only when accessed

# Dependency graph
![dependency-graph](dependency-graph.png)

# Narrow and Wide dependencies

![narrow-wide-dependencies](narrow-wide-dependencies.png)