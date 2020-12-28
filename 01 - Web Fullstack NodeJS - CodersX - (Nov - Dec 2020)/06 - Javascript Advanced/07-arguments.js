// array-link object:
// bản chất array là một cái Object, nên nó có thể biểu diễn bằng object như sau:

var arr = [1, 2, 3, 4]
//  tương đương với ->
var obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

// arguments là một array-like object gồm các tham số đầu vào của function
function sum () {
    let result = 0;
    for (const number of arguments) {
        result += number;
    }
    console.log(result);
}
sum(1,2,3,4)

// tạo ra một array từ arraylike-object
var arr = Array.from(arguments)