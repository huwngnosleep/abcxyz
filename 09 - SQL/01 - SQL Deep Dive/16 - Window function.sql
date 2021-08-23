-- window function applying that function to a window of the dataset
select
	*,
	max(salary) over()
from salaries