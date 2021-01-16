// Tinh tong hai so
var add = require('./add.js');
add(3, 4);

console.log('=======');

// Tinh tich hai so
var multiply = require('./multiply.js');
multiply(3, 4);

console.log('=======');

// Tinh tong cac so trong array
var sumOfArray = require('./sumOfArray.js')
sumOfArray([1, 2, 3, 4]);

console.log('=======');

// Circle Overlapse
var Circle = require('./circles.js');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);

distance = Math.sqrt((circle1.x - circle2.x)**2 + (circle1.y - circle2.y)**2);
sumOfRadius = circle1.radius + circle2.radius;
circle1.overLapse(distance, sumOfRadius);

