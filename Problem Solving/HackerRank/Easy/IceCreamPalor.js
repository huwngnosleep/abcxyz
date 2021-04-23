function icecreamParlor(m, arr) {
    let length = arr.length
    let map = {}
    for(let i = 0; i < length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = [i + 1]
        } else {
            map[arr[i]].push(i + 1)
        }
    }
    for(const element of arr) {
        if(map[m - element]) {
            return [map[m - element].pop(), map[element].shift()].sort()
        }
    }
}