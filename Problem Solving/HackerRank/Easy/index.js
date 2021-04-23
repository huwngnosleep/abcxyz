function beautifulTriplets(d, arr) {
    if(arr.length === 0) {
        return 0
    }
    let sumaryObj = {}
    for(let i in arr) {
        if(!sumaryObj[arr[i]]) {
            sumaryObj[arr[i]] = [Number(i)]
        } else {
            sumaryObj[arr[i]].push(Number(i))
        }
    }
    let total = 0
    for(let i in arr) {
        if(sumaryObj[arr[i] - d] && sumaryObj[arr[i] + d]) {
            let leftIndexArr = sumaryObj[arr[i] - d]
            let rightIndexArr = sumaryObj[arr[i] + d]
            for(const leftIndex of leftIndexArr) {
                for(const rightIndex of rightIndexArr) {
                    if(leftIndex < i && i < rightIndex) {
                        total += 1
                    }
                }
            }            
        }
    }
    return total
}