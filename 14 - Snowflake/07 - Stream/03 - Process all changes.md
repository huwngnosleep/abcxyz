### We can process all changes with one statement

```
merge into sales_final_table as f
using (
    select str.*, st.location, st.employees
    from sales_stream as str
    join store_table as st
    on str.store_id = st.store_id
) as s
on f.id = s.id
when matched
    and s.metadata$action = 'DELETE'
    and s.metadata$isupdate = 'FALSE'
    then delete
when matched
    and s.metadata$action = 'INSERT'
    and s.metadata$isupdate = 'TRUE'
    then update
    set f.product = s.product,
        f.price = s.price,
        f.amount = s.amount,
        f.store_id = s.store_id
when not matched
    and s.metadata$action = 'INSERT'
    then insert
        (id, product, price, store_id, amount, employees, location)
        values
        (s.id, s.product, s.price, s.store_id, s.amount, s.employees, s.location);
```
