function aVeryBigSum(ar) {
    var sum = 0;
    for (var i = 0, length = ar.length; i < length; i++)
        {
            sum += ar[i]; 
        }
    return sum;
}