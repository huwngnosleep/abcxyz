function permutationEquation(p) {
    let result = []
    for(let i = 1; i <= p.length; i++) {
       let y = p.indexOf(p.indexOf(i) + 1) + 1
        result.push(y)
        
    }
    return result

}