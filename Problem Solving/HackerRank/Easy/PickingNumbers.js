function pickingNumbers(arr) {
    // Write your code here
    const sum = {}
    for(const element of arr) {
        if(sum[element] === undefined) {
            sum[element] = 1 
        } else {
            sum[element] = sum[element] + 1
        }
    }
    let max = 0
    for(const key in sum) {
        for(const element of arr) {
            if(sum[element] + sum[element + 1] > max) {
                max = sum[element] + sum[element + 1]
            }
        }
    }
    for(const key in sum) {
        if(sum[key] === arr.length ||  sum[key] === arr.length / 2) {
            if(max > sum[key]) {
                return max
            }
            return sum[key]
        }
        
    }
    return max
}