function divisibleSumPairs(n, k, ar) {
    var l = ar.length, result = 0;
    for (var i = 0; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if ((ar[i] + ar[j]) % k == 0) {result += 1;}
        }
    }
    return result;
}