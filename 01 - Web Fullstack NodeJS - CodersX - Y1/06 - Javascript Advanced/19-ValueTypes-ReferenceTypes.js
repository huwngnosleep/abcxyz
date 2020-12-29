let a = 1
let b = 1
console.log(a === b) // true

let obj1 = { a : 1}
let obj2 = { a : 1}
console.log(obj1 === obj2) // false

// bản chất object và array là kiểu reference (tham chiếu)
// tức là biến sẽ chỉ trỏ đến cái giá trị đấy thôi chứ không gán biến là cái đấy
// nếu gán hai biến bằng nhau tức là cho 2 biến cùng trỏ đến 1 giá trị
// thay đổi một biến sẽ khiến các biến khác cùng thay đổi theo

let obj3 = obj2
obj3.a = 2
console.log(obj3)
console.log(obj2)