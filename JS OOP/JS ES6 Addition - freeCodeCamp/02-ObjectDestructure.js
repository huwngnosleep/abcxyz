// normal
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// destructure
const { name, age } = user;
// name = 'John Doe', age = 34

// destructuring to assign value
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34

// destructuring array
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5