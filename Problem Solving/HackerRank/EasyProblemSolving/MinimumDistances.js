function minimumDistances(arr) {
    if(arr.length === 0) {
        return -1
    }
    let min = 999999999
    for(let i = 0; i < arr.length; i++) {
        if(i !== arr.indexOf(arr[i])) {
            let distance = i - arr.indexOf(arr[i])
            if(distance < min) {
                min = distance
            }
        }
    }
    if(min === 999999999) {
        return -1
    }        
    return min
}