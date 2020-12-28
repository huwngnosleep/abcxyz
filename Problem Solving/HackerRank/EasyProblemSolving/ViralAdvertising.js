function viralAdvertising(n) {
    let d = 5;
    let recursive = (d) => Math.floor(d/2) * 3; 
    let result = 2;
    for(let i = 2; i <= n; i++) {
        d = recursive(d);
        result += Math.floor(d / 2);
    }
    return result
}