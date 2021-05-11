-- hàm count trả ra số lượng item
SELECT COUNT(*) FROM FilmLocations

-- thêm từ khóa distinct để các item là unique
-- thêm cái đuôi limit vào sau để giới hạn
SELECT DISTINCT Title FROM FilmLocations WHERE ReleaseYear=2015 LIMIT 10;
