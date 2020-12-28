// có thể viết ngắn gọn object từ constructor function
function Mouse(name) {
    this.name = name
}

Mouse.prototype.run = function() {
    console.log(`${this.name} is running`)
}

let mickey = new Mouse('mickey');

// Object literals
let jerry = {
    name: 'Jerry',
    run: function() {
        console.log(`${this.name} is running`)
    }
}

// enhanced object literals
let name = 'Tom'
let cat = {
    // bình thường phải là this.name: name,
    name,  
    // run: function....
    run() {
        console.log(`${this.name} is running`)
    }
}

cat.run()