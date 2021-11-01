-- extract date
select extract(day from date '1992/11/13') as day -- 13


-- truncate date 
select date_trunc('year', date '1992/11/13')
-- 1992/01/01
