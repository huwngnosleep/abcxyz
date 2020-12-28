function miniMaxSum(numbers) {
    let sum = 0;
    let max = numbers[0], min = numbers[0];
    for(const number of numbers) {
        if(number > max) {max = number}
        if(number < min) {min = number}
        sum += number;
    }
    let sumMax = sum - min;
    let sumMin = sum - max; 
    console.log(sumMin, sumMax);
}