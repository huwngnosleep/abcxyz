SELECT title from Book
    -- mặc định là ascend 
    ORDER BY title;

    ORDER BY title DESC;

-- order by column number
SELECT title, pages from Book
    ORDER BY 2;