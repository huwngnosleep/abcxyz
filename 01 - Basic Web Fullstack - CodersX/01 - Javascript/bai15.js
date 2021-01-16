// Xoa n phan tu cuoi cua mang
function deleteLastUnitsOfArray(){
    var arr = [1, 2, 3, 4, 5, 6, 7], l = arr.length;
    var n = 3;
    arr.splice(l - n, l - 1);
    console.log(arr);
  };
  deleteLastUnitsOfArray();
  
  console.log('===========');
  
  // Viet ham tra ve n phan tu dau tien trong mang
  function returnFirstUnitsOfArray(){
    var arrA = [1, 2, 3, 4, 5, 6, 7], l = arrA.length;
    var arrB, n = 3;
    arrB = arrA.splice(0, n);
    console.log(arrB);
  }
  returnFirstUnitsOfArray();