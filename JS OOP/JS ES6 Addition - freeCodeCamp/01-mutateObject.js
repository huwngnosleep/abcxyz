// một object (bao gồm cả array và function)
// tuy khai báo bằng const nhưng vẫn có thể bị thay đổi
const a = [1, 2, 3]

// làm như sau thì sẽ error
// a = [1, 2, 4]
// console.log(a)

// tuy nhiên như sau lại không error
a[2] = 4
console.log(a)

// bản chất của việc khai báo bằng const là
//  để không gán cho biến a giá trị khác
// tuy nhiên các phần tử trong biến a lại có thể thay đổi

// ta có hàm Object.freeze để khiến object không thể thay đổi

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);