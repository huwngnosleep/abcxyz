# RDD - Resilient Distributed Dataset

Resilient - able to withstand with failures
Distributed - spanning across multiple machines

### to be an RDD, a dataset must implement
- partitions() -> Array[Partition]
- iterator(p: partition, parents: Array[Iterator]) -> Iterator
- dependencies() -> Array[Dependency]