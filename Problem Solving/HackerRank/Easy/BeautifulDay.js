function beautifulDays(startDay, endDay, k) {
    let count = 0;
    for(let i = startDay; i <= endDay; i++) {
        let iReversed = reverseNumber(i);
        if ((i - iReversed) % k === 0) {count += 1}
    }
    return count
}

function reverseNumber(number) {
    var str = number.toString();
    var reversedNumber = Number(reverseString(str));
    return reversedNumber;
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}