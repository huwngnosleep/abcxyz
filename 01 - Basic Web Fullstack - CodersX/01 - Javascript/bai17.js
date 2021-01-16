// Dung Map Method va Callback tra ve mang nhan 3 cac phan tu trong mang ban dau
var a = 0;
function triple(x){
  a = x * 3;
tripleUnitsOfAnArray();
};
function tripleUnitsOfAnArray (){
    var arrA = [1, 2, 3];
    arrB = arrA.map(function(x){
        return x*a;
});
    console.log(arrB);
};
triple(1);

console.log('============');

// Viet ham tra ve mang chua ten cac user
function returnNameOfUsers(){
    var names;
    var arr = [
        {name: 'Hung'},
        {name: 'Dep'},
        {name: 'Zai'},
    ];
    names = arr.map(function(x){
      return x.name;
    });
    console.log(names);
};
returnNameOfUsers();
