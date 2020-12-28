// call: function.call(this, p1, p2,...)
// apply: function.apply(this, [p1, p2,...])

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
    // arguments là một array-like object nên 
    // có thể cho vào làm tham số của hàm apply
    
    const x = sum.apply(null, arguments); 
    return x / arguments.length;
}

average(1, 2, 3, 4)