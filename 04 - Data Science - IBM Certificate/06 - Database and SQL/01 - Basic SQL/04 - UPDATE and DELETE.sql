UPDATE author
SET LastName = 'Katta'
    FirstName = 'Sashimi'
    WHERE AUTHOR_ID = 'A2'
;


DELETE FROM author
    WHERE AUTHOR_ID IN ('A2', 'A3')