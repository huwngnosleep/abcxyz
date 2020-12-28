// thay vì viết như thế này
var greeting = (name) => 'Hi... ' + name + ' !'

console.log(greeting('Hung'))

// thì chúng ta sẽ viết như thế này
var greeting2 = (name) =>  `Hi... ${name} !`

console.log(greeting2('Hung'))

// ngoài ra thì template string còn có thể xuống dòng
var greeting3 = (name) =>  `Hi... 
${name} !`

console.log(greeting3('Hung'))