-- String pattern
SELECT book_id, title FROM Book
    WHERE book_id = 'B1'

-- tìm những người có tên bắt đầu bằng 'R'
-- dấu phần trăm thể hiện là còn nhiều cái sau nó
WHERE firstname LIKE 'R%'

-- Range
WHERE pages between 290 and 300

WHERE country IN ('AU', 'BR')