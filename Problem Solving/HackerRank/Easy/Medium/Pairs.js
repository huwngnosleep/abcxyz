function pairs(k, arr) {
    let map = {}
    let result = 0
    for(let i of arr) {
        if(map[i]) {
            map[i]++
        } else {
            map[i] = 1
        }
    }
    for(let i of arr) {
        let x = i - k 
        if(map[x]) {
            result += map[i] + map[x]
        }
    }
    return result / 2
}
