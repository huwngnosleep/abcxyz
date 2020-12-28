var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả? - 1
bar();  
console.log(a); // Kết quả? - 2
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh

Vì ở function foo có dùng lệnh var, nghĩa là tạo ra một biến mới tuy cùng tên với biến a
nhưng là hai biến khác nhau, nên khi kết thúc function foo thì giá trị của biến a global không đổi.
Còn ở function bar thì không có lệnh var, tức là không hề tạo ra biến mới mà chỉ thay đổi giá trị của
biến a ban đầu. Nên sau khi console.log sẽ được kết quả là biến a đã bị thay đổi


var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả khác nhau

Kết quả đầu tiên in ra giá trị key a của object b. Còn kết quả thứ hai là của biến a khai báo đầu bài
do gán fooCopy bằng function trong object b mà không có khai báo biến mới nên chương trình tự hiểu là
dùng biến a global ban đầu