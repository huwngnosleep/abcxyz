function Mouse(name) {
    this.name = name
}

Mouse.prototype.run = function() {
    console.log(`${this.name} is running`)
}

let mickey = new Mouse('mickey');

// class giúp viết constructor function dễ dàng hơn
class Cat {
    constructor(name) {
        this.name = name;
    }
    // prototype
    run() {
        console.log(`${this.name} is running`)
    }
}

let tom = new Cat('Tom');
tom.run();