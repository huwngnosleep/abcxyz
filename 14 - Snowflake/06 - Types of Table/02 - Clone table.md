### clone command is easily create a copy of table with all the metadata

```
create table <table_name>
    clone <source_table_name>
    before (timestamp => <timestamp>)
```
