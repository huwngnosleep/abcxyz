-- use coalesce function to handle null value

-- if age = null, there 20 will be select
select coalesce(age, 20) from student
