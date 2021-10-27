select 
(
    select distinct e.salary
    from employee as e
    order by e.salary desc
    limit 1 offset 1
) as 'SecondHighestSalary'