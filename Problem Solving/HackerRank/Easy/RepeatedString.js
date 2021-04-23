function repeatedString(string, n) {
    let l = string.length;
    let x = n % l;
    let result = numberOfaInString(string) * Math.floor(n / l);
    for(var i = 0; i < x; i++) {
        if(string[i] == 'a') {result += 1}
    }
    return result
}

function numberOfaInString(string) {
    let result = 0;
    for(let char of string) {
        if(char == 'a') {result += 1}
    }
    return result;
} 