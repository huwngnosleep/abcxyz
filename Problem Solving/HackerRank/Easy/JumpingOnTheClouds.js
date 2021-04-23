function jumpingOnClouds(c) {
    let i = 0
    let count = 0
    while(true) {
        if(c[i + 2] === 0) {
            i = i + 2
            count += 1
        } else if(i !== c.length - 1) {
            i = i + 1
            count += 1
        } else {
            return count
        }
    }
}
