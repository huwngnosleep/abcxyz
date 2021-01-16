// Bình thường, khi dùng xong một biến
// máy tính sẽ tính toán xem có dùng biến đấy nữa không
// rồi giải phóng nó ra khỏi bộ nhớ
// đó gọi là Closure
// nhưng trong Javascript, biến được dùng xong rồi vẫn có thể gọi lại
function sum(a, b) {
    let c = a + b
    return () => console.log(c)
}
sum(1, 2)()