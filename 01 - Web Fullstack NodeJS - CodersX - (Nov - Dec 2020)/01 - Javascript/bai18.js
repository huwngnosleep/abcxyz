var arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]
// Tra ve mang chua phan tu lon hon 5
function fiveAndGreaterOnly(){
    
    var arrB = arr.filter(function(x){
        return x >= 5;
})
    console.log(arrB);
};
fiveAndGreaterOnly();

console.log('===========')

// Tra ve mang chi chua so chan
function evensOnly(){
    var arrB = arr.filter(function(x){
        return x % 2 == 0;
})
    console.log(arrB);
};
evensOnly();

console.log('===========')

// Loc ra nhung hoc sinh khong phai female
var students = [
  {name: 'Hung dz', gender: 'male'},
  {name: "Rose'", gender: 'women'},
  {name: 'Jennie', gender: 'women'},
];
function filterOutFemales(){
    var arrB = students.filter(function(x){
        return x.gender == 'male'
    })
    console.log(arrB);
};
filterOutFemales();
