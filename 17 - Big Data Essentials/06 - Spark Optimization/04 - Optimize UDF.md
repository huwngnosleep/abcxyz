This is the original join

![udf-1](udf-1.png)

This is the version using UDF to map IP address, which is 5 times slower

![udf-2](udf-2.png)

# The reason is, Spark avoid using Python because it can slow down the computation, so there are some ways to optimize it

![udf-3](udf-3.png)

Here is the result using UDF written by Java and read to Spark by jar file through SparkContext. This approach just 2 times slower than the original one

![udf-4](udf-4.png)