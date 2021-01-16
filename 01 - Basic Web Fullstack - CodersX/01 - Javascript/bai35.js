// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
/**
* Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
*/
function doSomething(a) {
    var b;
    if (a > 0) {
    b = 1;
    } else if (a < 0) {
    b = 2;
    } else {
    b = 3;
    }
    return b;
}

function doSomethingTernary(a) {
    var b = 0;
    a >= 0 ?    callback() : b = 2;
    function callback(a){
        a = 0 ? b = 3 : b = 1
    } 
    console.log(b)
}
doSomethingTernary(2);