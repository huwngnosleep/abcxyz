// có thể dùng call để gọi function
// function.call(this, p1, p2, ....)
// tham số đầu tiên đại diện cho this, từ tham số thứ 2 trở đi là các biến nhận vào
function greeting(name) {
    console.log(`Hi ${name}`)
}
greeting.call(null, 'Hung');


function greeting2() {
    console.log(`Hi ${this.name} ${this.age}`)

}
var hooman = {
    name: 'Hung',
    age: 18
}
greeting2.call(hooman)