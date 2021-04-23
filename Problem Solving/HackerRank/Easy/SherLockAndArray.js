function balancedSums(arr) {
    if(arr.length == 1) {
        return 'YES'
    }
    let sum = 0
    let left = 0
    for(const number of arr) {
        sum += number
    }
    for(const number of arr) {
        if(2 * left == sum - number) {
            return 'YES'
        } else {
            left += number
        }
    }
    return 'NO'

}