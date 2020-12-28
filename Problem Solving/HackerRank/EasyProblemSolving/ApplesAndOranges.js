function countApplesAndOranges(startPoint, endPoint, appleTree, orangeTree, apples, oranges) {
    var appleInHouse = 0, orangeInHouse = 0;
    var appleTreeToStart = startPoint - appleTree;
    var appleTreeToEnd = endPoint - appleTree;
    var orangeTreeToEnd = orangeTree - endPoint;
    var orangeTreeToStart = orangeTree - startPoint;
    for (var apple of apples) {
        if (apple > 0) {
            if (apple <= appleTreeToEnd && apple >= appleTreeToStart) {
                appleInHouse += 1;
            }
        }
    }
    for (var orange of oranges) {
        if (orange < 0) {
            var distance = Math.abs(orange);
            if (distance >= orangeTreeToEnd && distance <= orangeTreeToStart) {
                orangeInHouse += 1;
            }
        }
    }
    console.log(appleInHouse);
    console.log(orangeInHouse);
}