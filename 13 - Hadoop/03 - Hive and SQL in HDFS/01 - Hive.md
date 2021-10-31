### Hive can make Hadoop cluster look like a relational database and integrate a Hadoop cluster with a SQL database

- Hive uses SQL query syntax to deal with Big Data, but under the hood, it is MapReduce

- Hive is limited in what SQL can do, Pig and Spark can do more complicated stuff

```
create view topMovieID as
select movieID, count(movieID) as ratingCount
from ratings
group by movieID
order by ratingCount desc

select n.title, ratingCount
from topMovieID as t
join names as n
on t.movieID = n.movieID

```

### Import data from MySQL to HDFS Hive

grant localhost to operating on database
```
mysql -u root -p
grant all privileges on movielens.* to ''@'localhost'
exit
```

using sqoop to import to HDFS file system

```
sqoop import --connect jdbc:mysql://localhost/movielens --driver com.mysql.jdbc.Driver --table movies -m 1 

```