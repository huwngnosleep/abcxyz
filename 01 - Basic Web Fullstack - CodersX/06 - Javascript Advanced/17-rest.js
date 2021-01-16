// ...rest là phần còn lại của cái input của function
// ...rest luôn được truyền vào sau cùng
// ...rest gom các giá trị truyền vào thành một array
function formString(separator, ...element) {
    console.log(...element.join(separator));
}
formString('.', 'a', 'b', 'c')