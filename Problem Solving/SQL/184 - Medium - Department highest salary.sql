select distinct 
    maxSalary.name as Department, 
    e.name as Employee, 
    e.salary as Salary
from employee as e,
    (select 
        d.name,
        e.departmentId as id,
        max(e.salary) as 'highestSalary'
    from employee as e
    join department as d
        on e.departmentId = d.id
    group by e.departmentId) as maxSalary
where e.salary = maxSalary.highestSalary and e.departmentId = maxSalary.id
