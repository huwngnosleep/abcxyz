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
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    const x = readline();
    var line2 = readline(); 
    
    waterMelon(x)
    // foo(x);
    // foo(line2);
}
function foo(x) {
    process.stdout.write("hello: ");   // without auto '\n' (newline)
    console.log(x);  // with auto '\n' (newline)
}
function waterMelon (x) {
    var check = 0;
    if (x % 2 === 0) {check += 1} 
    if (x > 2) {check += 1}
    if (check === 2) {console.log('YES')}
        else {console.log('NO')}
}