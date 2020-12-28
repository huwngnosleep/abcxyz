function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let pairs = [];
    for(const keyboard of keyboards) {
        for(const drive of drives) {
            pairs.push(keyboard + drive)
        }
    }
    let heighestPairs = -1;
    for(const pair of pairs) {
        if(pair <= b && pair > heighestPairs) {
            heighestPairs = pair;
        }
    }
    return heighestPairs    
}