function cutTheSticks(arr) {
    let result = [];
    result.push(arr.length);
    while(true) {
        let min = Math.min(...arr), max = Math.max(...arr);
        arr = arr.map(number => number - min);
        arr = arr.filter(number => number !== 0);
        if(arr.length !== 0) {result.push(arr.length)};
        if(min === max) {break} 
    }
    return result;
}