function beautifulTriplets(d, arr) {
    let result = 0;
    for(let j = 0; j < arr.length; j++) {
        for(let i = 0; i < j; i++) {
            for(let k = j + 1; k < arr.length; k++) {
                let sub1 = arr[j] - arr[i];
                let sub2 = arr[k] - arr[j];
                if(sub1 == sub2 && sub1 == d) {
                    result += 1;
                }
            }
        }
    }
    return result
}