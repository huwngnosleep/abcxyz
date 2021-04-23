function birthdayCakeCandles(candles) {
    // take in input
    // const n = readLine();
    // const input = readLine();
    // var inputArr = input.match(/\d+/g);
    // for (const element of inputArr) {
    //     candles.push(Number(element));
    // }

    // my logic here
    var maxHeight = 0, result = 0;
    for (const candle of candles) {
        if (candle > maxHeight) {maxHeight = candle}
    }
    for (const candle of candles) {
        if (candle == maxHeight) {result += 1}  
    }
    return result
}
