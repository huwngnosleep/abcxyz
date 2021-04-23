function birthday(arr, d, m) {
    var result = 0;
    for (var i = 0, length = arr.length; i < length; i++) {
        var j = 1, sum = 0;
        sum += arr[i];
        while (j < m) {
            sum += arr[i + j];
            j++;
        }
        if (sum == d) {result += 1}
    }
    return result;
}
