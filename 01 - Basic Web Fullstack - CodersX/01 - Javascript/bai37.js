// Tinh tong cac so le nho hon x
function sumOfOdds(x){
    var sum = 0;
    for (var i = 0; i < x; i++) {
        if (i % 2 == 1) { sum += i};
    };
    console.log(sum);
};
sumOfOdds(10);

// Boi chung lon nhat cua 3 va 5 trong khoang tu 0 den 1000
function bCLN () {
    var BCLN;
    for (var i = 1000; i > 0; i--) {
        if (i % 3 == 0 && i % 5 == 0) {BCLN = i;
                                     break;};
    };
    console.log(BCLN);
};
bCLN();

// Nhap vao mat khau
var readLineSync = require('readline-sync');
var password = readLineSync.question('Cai dat mat khau \n');
var input = readLineSync.question('Nhap mat khau \n');
if (input == password) {console.log('Welcome!')}
else {console.log('Wrong Password!!!')};
