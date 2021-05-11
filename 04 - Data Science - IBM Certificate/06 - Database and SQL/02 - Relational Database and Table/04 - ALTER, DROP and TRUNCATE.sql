-- ALTER
ALTER TABLE <table_name>
    ADD COLUMN <column_name_1> datatype

ALTER TABLE author
    ADD COLUMN telephone_number BIGINT;

ALTER TABLE author
    ALTER COLUMN telephone_number SET DATA TYPE CHAR(20)
    DROP COLUMN telephone_number;

--  DROP
DROP TABLE <table_name>

-- TRUNCATE
TRUNCATE TABLE <table_name>
    IMMEDIATE;