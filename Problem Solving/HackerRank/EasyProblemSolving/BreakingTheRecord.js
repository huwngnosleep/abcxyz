function breakingRecords(scores) {
    var minimum = scores[0], maximum = scores[0];
    var min = 0, max = 0;
    for (var score of scores) {
        if (score < minimum) {
            min += 1;
            minimum = score;
        }
        if (score > maximum) {
            max += 1;
            maximum = score;
        }
    }
    return [max,min]
}