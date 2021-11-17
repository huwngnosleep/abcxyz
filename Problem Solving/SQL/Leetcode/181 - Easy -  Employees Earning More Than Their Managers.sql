select employee.name as 'Employee'
from employee as employee
join employee as manager on employee.managerId = manager.id
where employee.salary > manager.salary