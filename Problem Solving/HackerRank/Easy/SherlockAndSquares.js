function squares(a, b) {
    // Write your code here
    let result = 0
    for(let i = parseInt(Math.sqrt(a)); i <= parseInt(Math.sqrt(b)); i++) {
        if(i * i <= b && i * i >= a) {
            result += 1
        }
    }
    return result
}