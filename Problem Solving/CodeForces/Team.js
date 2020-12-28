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
    const nAndK = readline();
    const n = parseInt(nAndK[0]);
    const k = parseInt(nAndK[2]);
    const pointsOfStudents = readline();
    
    // my logic here
    var result = 0;
    for (var pointOfEachStudent of pointsOfStudents) {
        var point = parseInt(pointOfEachStudent);
        if (point > k) {result += 1};
    };
    console.log(result);
}