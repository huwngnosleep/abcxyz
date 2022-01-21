# Create spark dataframe
```
from pyspark.sql import SparkSession
spark_session = SparkSession.builder\
                            .enableHiveSupport()\
                            .appName('spark sql')\
                            .master('local')\
                            .getOrCreate()
geoip_rdd = spark_session\
                .sparkContext\
                .textFile("/user/pmezentsev/geoip")

geoip_rdd.take(3)
```

# Schema
```
from pyspark.sql.types import *
schema = StructType()\
            .add("ip", StringType())\
            .add("code", StringType())\
            .add("country", StringType())

geoip_df = spark_session\
            .createDataFrame(geoip_rdd1, schema)

geoip_df.rdd

geoip_df.printSchema()
```

# Spark Dataframe to Pandas Dataframe

```
# from Spark Dataframe to Pandas Dataframe
geoip_pd = geoip_df.toPandas()

geoip_pd.head()

# from Pandas to Spark
geoip_01_df = spark_session.createDataFrame(geoip_pd)
```