function getTotalX(a, b) {
    // Write your code here
    let result = [];
    if(a.length - b.length > 0) {
        var l = a.length
    }
    else {var l = b.length}
    for(let i = a[a.length - 1]; i <= b[0]; i+= a[a.length - 1] ) {
        let check = 0;
        for(let j = 0; j < l; j++) {
            if(i % a[j] == 0) {check += 1}
            if(b[j] % i== 0) {check += 1}
        }
        if(check == (a.length + b.length)) {result.push(i)}
    }
    return result.length
}