# Spark has 3 main Join algorithms

![join-1](join-1.png)

# Sort-Merge join is the default join because of its advantages, but it can only handle sortable key type

# Shuffle-Hash Join can be consider when one side Data is much smaller than the other, so it can easily create the hash map

![join-2](join-2.png)

Spark can check if we can use another Join algorithm using those two methods

![join-3](join-3.png)

We can change default threshold to use this Join algorithm

![join-4](join-4.png)

# The best possible way to Join is use the Broadcast Join, but to broadcast a dataset, it must be small

![join-5](join-5.png)