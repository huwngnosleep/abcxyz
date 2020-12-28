function hurdleRace(k, heights) {
    let maxHeight = 0;
    for (const height of heights) {
        if (height > maxHeight) {maxHeight = height}
    }
    if (maxHeight > k) {return maxHeight - k}
    else return 0
}
