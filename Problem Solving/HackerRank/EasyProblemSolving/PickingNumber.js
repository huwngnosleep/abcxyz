function pickingNumbers(arr) {
    // Write your code here
    arr = arr.sort((a, b) => a - b);
    var resultArr1 = [], resultArr2 = [];
    var mostNumber = mostDuplicated(arr)
    for (const element of arr) {
        if ((mostNumber - element) <= 1 && (mostNumber - element) >= 0) {
        resultArr1.push(element);
        }
    }
    for (const element of arr) {
        if ((element - mostNumber) <= 1 && (element - mostNumber) >= 0) {
        resultArr2.push(element);
        }
    }
    if (resultArr1.length >= resultArr2.length) {return resultArr1.length}
    else {return resultArr2.length}
}

function mostDuplicated(arr) {
    var  count = {}, mostSeen = 0;
    var birds = arr.sort((a, b) => a - b); 
    birds.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 
    for (const i in count) {
        if (count[i] > mostSeen) {mostSeen = count[i]} 
    }
    for (const i in count) {
        if (count[i] == mostSeen) {return i}
    }
}

