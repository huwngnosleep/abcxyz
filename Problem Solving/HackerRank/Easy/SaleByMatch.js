var newArr = []
function delDuplicate(sockArr) {
    for (sock of sockArr) {
        if (newArr.indexOf(sock) === -1) {newArr.push(sock)}        
    }
    return newArr
}
function sockMerchant(numberOfSock, sockArr) {
    delDuplicate(sockArr);
    var check = 0, pair = 0
    for (sock of newArr) {
        for (var i = newArr.indexOf(sock); i < numberOfSock; i++) {
            if (sockArr[i] == sock) {check += 1}
        }
        if (check % 2 == 1) {check -= 1}
        pair += check / 2;
        check = 0;
    }
    return pair
}
