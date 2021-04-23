function missingNumbers(arr, brr) {
    let result = []
    let mapA = {}
    let mapB = {}
    for(let i = 0; i < brr.length; i++) {
        if(!mapB[brr[i]]) {
            mapB[brr[i]] = 1
        } else {
            mapB[brr[i]]++
        }
        
    }
    for(let i = 0; i< arr.length; i++) {
        if(!mapA[arr[i]]) {
            mapA[arr[i]] = 1
        } else {
            mapA[arr[i]]++
        }
    }
    for(let i = 0; i< brr.length; i++) {
        if((mapA[brr[i]] && mapB[brr[i]] > mapA[brr[i]]) || !mapA[brr[i]]) {
            if(result.indexOf(brr[i]) == -1) {
                result.push(brr[i])
            }
        }
    }
    console.log(mapA)
    console.log(mapB)
    return result.sort((a,b) => a - b)
}
