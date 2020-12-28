function compareTriplets(aliceScores, bobScores) {
    var alicePoint = 0, bobPoint = 0;
    var total = [];
    for (var i = 0, length = aliceScores.length; i < length; i++) {
        if (aliceScores[i] > bobScores[i]) { alicePoint += 1};
        if (aliceScores[i] < bobScores[i]) { bobPoint += 1}
        
    }
    total.push(alicePoint, bobPoint);
        return total;

}