### All transformation on RDD are lazy, so when comparing to SQL, Spark Dataframe much similar to View, not Table because they are calculated when being transformed

```
geoip_df

geoip_df.show(3)

geoip_df.select("country", "ip")\
        .show(3)


geoip_df\
    .select("country", "ip")\
    .where("country = 'Russian'")\
    .show(3)

```