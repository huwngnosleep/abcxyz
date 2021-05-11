-- BY
SELECT country, count(country)
    FROM Author GROUP BY country

    -- Country     2
    -- AU          1
    -- BR          1
    -- CA          3
    -- CN          6
    -- IN          6
    -- RO          3

SELECT country, count(country) as Count
    FROM Author GROUP BY country

    -- Country     Count
    -- AU          1
    -- BR          1
    -- CA          3
    -- CN          6
    -- IN          6
    -- RO          3

-- Having
SELECT country, count(country) as Count
    FROM Author 
    GROUP BY country
    HAVING count(country) > 4
    
    -- Country     Count
    -- CN          6
    -- IN          6
