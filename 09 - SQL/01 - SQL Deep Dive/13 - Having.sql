-- having is use to filter on group
-- where is for filtering on each row

select departments.dept_no, count(dept_no)
from dept_emp
inner join employees using(emp_no)
inner join departments using(dept_no)
where employees.gender = 'F'
group by departments.dept_no
having count(dept_no) > 20000