select SUM(COST) as SUM_OF_COST
    from PETRESCURE

    -- SUM_OF_COST
    -- 1718.14

-- min, max
select MAX(QUANTITY) from PETRESCUE where ANIMAL = 'Dog'

-- CÁC FUNCTION TÍNH TOÁN KHÔNG DÙNG ĐƯỢC TRONG WHERE CLAUSE
-- NÊN SINH RA KĨ THUẬT LÀ SUB-QUERY
-- average 
select AVG(COST) from PETRESCUE

-- scalar
ROUND(), LENGTH(), UCASE, LCASE