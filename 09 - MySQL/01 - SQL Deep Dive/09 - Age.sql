-- select age('1800-01-01') -- error
-- must cast string to date before using
select age(date '1800-01-01')

-- age between two time
select age(date '1992/11/13', date '1800/01/01') 
