select * from employees
    where salary < (select AVG(salary) from employees)