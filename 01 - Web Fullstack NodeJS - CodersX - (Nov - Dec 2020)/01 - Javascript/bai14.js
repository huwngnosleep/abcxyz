// Diem khac nhau giua for of va for in 
// for of lap qua cac phan tu trong array con for in lap qua cac key trong object

// Tinh tong cac phan tu trong mang
function sumOfArray(){
    var arr = [1, 2, 3, 4];
    var sum = 0;
    for (var unit of arr){ sum += unit};
    console.log(sum); };
sumOfArray();

console.log('========');

// Tinh tich cac phan tu trong mang
function mulOfArray(){
    var arr = [1, 2, 3, 4];
    var mul = 1;
    for (var unit of arr){ mul *= unit};
    console.log(mul);
};
mulOfArray();

console.log('========');

// Viet ham kiem tra xem object co ton tai mot key hay khong
function keyChecking(parameter){
    var hungdz = {
        name: 'Hung',
        age: 18,
        gender: 'male',
        inLove: false,
    };
    var checker = 0;
    for ( elements in hungdz){
        if (elements == parameter){checker += 1}
    };
    if ( checker != 0){console.log('true')}
    else {console.log('false')};
};
keyChecking('age');