function findDigits(n) {
    let str = String(n);
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        if(n % Number(str[i]) === 0) {result += 1}
    }
    return result;
}
