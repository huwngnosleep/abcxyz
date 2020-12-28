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
function takeIn2Inputs () {
    // take in  2 inputs
    var inputStr = readline();
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

    var n = Number(inputArr[0])
    const k = Number(inputArr[1])
    
}
function takeInMultipleOfInputs () {
    // take in multiple of inputs

    var inputStr = readline();
    var inputStrExtracted = inputStr.match(/\d+/g);
    var inputArr = [];
    for (var input of inputStrExtracted) {
        inputArr.push(Number(input));
    }
}
function main() {

    // my logic here
}