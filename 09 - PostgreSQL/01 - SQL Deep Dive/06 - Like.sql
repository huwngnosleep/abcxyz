-- % - any number of character
-- _ - only 1 character

-- M% - start with M
-- %m% - have m in the value
-- 2_%_% - at lease 3 length 
select * from employees
where first_name like 'G&r'