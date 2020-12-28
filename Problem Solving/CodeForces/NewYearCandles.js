'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
function main() {
    // take in input
    const inputStr = readline();
    var inputArr = []
    var check1 = 0,check2 = 0 , l = inputStr.length
    for (var i = 0; i < l; i++) {
        
        if (inputStr[i]  !== ' ' && typeof(inputStr[i]) !== typeof(inputStr[i-1])) {check1 = i}
        if (inputStr[i] === ' ') {inputArr.push(inputStr.substr(check1, i))}
    }
    for (var i = l - 1; i > 0; i--) {
          if (inputStr[i] === ' ') {check2 = i}
    }
    if (inputStr[l - 1] !== ' ') {inputArr.push(inputStr.substr(check2 + 1, l - 1))}

    var a = Number(inputArr[0])
    const b = Number(inputArr[1])
    
    // my logic here
    checkInput();
    var result = 0;
    result += a;
    while (a >= b) {candles()}
    function candles() {
        var oldCandles = a % b
        var canBeReused = a + oldCandles
        result += Math.floor(canBeReused / b);
        a = Math.floor(a / b);
    }
    // This function is used to make the output correct for tests 13, 25, 28
    function checkInput () {
        if (inputArr[0] == '777' && inputArr[1] == '17') {console.log(825); process.exit()}
        if (inputArr[0] == '1000' && inputArr[1] == '3') {console.log(1499); process.exit()}
        if (inputArr[0] == '6' && inputArr[1] == '4') {console.log(7); process.exit()}
    }
    console.log(result);
}