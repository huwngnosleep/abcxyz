CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE local_offset INT;
    SET local_offset = N-1;
    RETURN (
      # Write your MySQL query statement below.
        select distinct salary
        from employee
        order by salary desc
        limit 1 offset local_offset
    );
END

