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
    const n = readline();
    var inputArr = []
    for (var i = 1; i <= n; i++) {
        var input = readline()
        inputArr.push(input);
    }
    var l = inputArr.length
    // code here
    for (var word of inputArr) {
        if (word.length > 10) {
            var num = word.length - 2
            var str = num.toString()
            console.log(word[0] + str + word[word.length-1]);
        }
        else {console.log(word)}
    }
}
