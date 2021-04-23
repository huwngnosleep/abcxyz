function plusMinus(numberArr) {
    var posNumbers = 0, negNumbers = 0, zeroNumbers = 0;
    var denominator = numberArr.length;
    for (var i = 0, l = numberArr.length; i < l; i++) {
        if (numberArr[i] > 0) {posNumbers += 1};
        if (numberArr[i] < 0) {negNumbers += 1};
        if (numberArr[i] == 0) {zeroNumbers += 1}
    };
    var ratio1 = (posNumbers/denominator).toFixed(6);
    var ratio2 = (negNumbers/denominator).toFixed(6);
    var ratio3 = (zeroNumbers/denominator).toFixed(6)
    return  console.log(ratio1),console.log(ratio2),console.log(ratio3)
}
