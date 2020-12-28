function pickingNumbers(arr) {
    // Write your code here
    var length = 0, maxLength = 0;
    var sortArr = arr.sort(function(a, b){
        return a - b;
    })
    for (var i = 0, l = arr.length; i < l; i++) {
        if ((arr[i+1] - arr[i]) <= 1) {
            length += 1;
            if (maxLength < length) {maxLength = length}
        } else { length = 0;
        }
        
    }
    return maxLength
}