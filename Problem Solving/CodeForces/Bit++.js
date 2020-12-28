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
    var n = readline();
    var inputArr = []
    for (var i = 1; i <= n; i++) {
        var inputStr = readline()
        inputArr.push(inputStr);
    }    
    // my logic here
    var x = 0;
    for (var statement of inputArr) {
        if (statement.indexOf('+') != -1) {x++}
        else {x--}
    }
    console.log(x);
}