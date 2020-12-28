// Viết hàm đảo ngược chuỗi
function reverse (string) {
    var arr = string.split("");
    for(var l = arr.length, i = l - 1; i >= 0; i--) {
        arr.push(arr[i]);
        arr.splice(i, 1);
    };
    string = JSON.stringify(arr);
    var str = string.replace(/[,"]/g,'')
    var finalStr = str.substr(1, str.length - 2);
    console.log(finalStr)   

};
reverse('#$ #@ fh bsk123 @#@!cvcxh');

console.log('-----------------');

// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function upperCase(string) {
    var arr = string.split(/[\s,]+/);
    var newArr = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        var upperedCase = arr[i][0].toUpperCase();
        var newElements = arr[i].replace(arr[i][0], upperedCase);
        newArr.push(newElements)
    };
    newArr = JSON.stringify(newArr);
    var str1 = newArr.replace(/"/g,'');
    var str2 = str1.replace(/,/g, ' ');
    var finalStr = str2.substr(1, str2.length - 2);
    console.log(finalStr)
};
upperCase('hi there, how is it going?');

console.log('-----------------');


// Viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(num1, num2, num3) {
    var arr = [];
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);
    var max = 0;

    for (var i = 0, l = arr.length; i < l; i++) {
        if (max < arr[i]) {max = arr[i]}
    };
    console.log(max);

};
findMax(3, 5, 7)

console.log('-----------------');

// Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(string) {
    var newStr = string.slice(0, 4);
    if (newStr == 'Java') {console.log(true)}
    else {console.log(false)};
};
startWith('Javascript');

console.log('-----------------');

// Viết hàm trả về hiệu lớn nhất giữa hai phần tử liền kề nhau trong mảng
function findMaxDiff(arr) {
    var newArr = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        newArr.push(arr[i] - arr[i + 1])
    };
    var max = 0;
    for (var i = 0, l = newArr.length; i < l; i++) {
        if (max < newArr[i]) { max = newArr[i]}
    };
    console.log(max);
};
findMaxDiff([1, -10, 5, 18, -9, 5]);

console.log('-----------------');

// Viết hàm kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
function equal_pt(string) {
    var demp = demt = 0;
    for (var i = 0, l = string.length; i < l; i++) {
        if (string[i] === 'p') {demp += 1}
        if (string[i] === 't') {demt += 1}
    };
    if(demp === demt && demp !== 0) {console.log(true)}
    else {console.log(false)}
};

equal_pt('paatpsts');

console.log('-----------------');

// viết hàm trả về n giá trị đầu tiên của mảng
function first(array, n) {
    console.log(array.splice(0, n))
};
first([7, 9, 0, -2], 3)

console.log('-----------------');

// Viết function omitCharAt trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
function omitCharAt(string, n) {
    var newString = string.slice(0, n - 1) + string.slice(n, string.length);
    console.log(newString);
};
omitCharAt("Hello Quang Dat", 8);

console.log('-----------------');

// Viết hàm tìm số gần số 100 nhất
function nearestTo100(num1, num2) {
    var sub1 = Math.abs(100 - num1);
    var sub2 = Math.abs(100 - num2);
    if (sub1 < sub2) {console.log(num1)}
    else {console.log(num2)}
};
nearestTo100(89, 189);

console.log('-----------------');

// Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào
function pyString(string) {
    console.log('Py' + string)
};
pyString("Coders X");

console.log('-----------------');

// Viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
function newString(string, n) {
    var newStr = string.slice(0, 2) + string.slice(string.length - n, string.length);
    console.log(newStr);
};
newString('describle',2);

console.log('-----------------');

// Viết hàm để nhóm các phần tử trong mảng
function chunkArrayInGroups(array, n) {
    var newArr = [];
    for (var i = 0, l = array.length; i < l; i += n) {
        var newArrElement = [];
        for (var j = 1, i2 = i; j <= n; j++) {
            if (array[i2] !== undefined) {newArrElement.push(array[i2]);}
            i2++;
        };
        newArr.push(newArrElement);
    };
    console.log(newArr);
};
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

console.log('-----------------');

// Viết hàm tính tổng lớn nhất của k phần tử trong mảng
function maxOfSumChain(array, n) {

};
maxOfSumChain([1,3,2],2);


//  Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước
//thành 1 chuỗi String cho trước khác không?
function rearrangeChar(string1, string2) {
    var count = 0;
    if (string1.length !== string2.length) {console.log(false)}
    else {
        for (var i = 0, l = string1.length; i < l; i++) {
            if (string2.indexOf(string1[i]) !== -1) {count++}
        };
        if (count === string1.length) {console.log(true)}
        else {console.log(false)}
    }
};
rearrangeChar('afaw','afaw');
rearrangeChar('awef23f','n65u2r');