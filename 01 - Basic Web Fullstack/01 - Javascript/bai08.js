var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.
x = 9 + a++ / a = 9
x = 9 + 9 / a = 10
x = 18


===========



var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm các dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
10 + 18 - ++b - --a / a = 9, b = 19
10 + 18 - 20 - 10 / a = 10, b = 20
= -2