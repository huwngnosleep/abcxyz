// In tu A -> Z
function printAtoZ(){
    var i;
    for( i = 97; i <= 122; i++){
      console.log(String.fromCharCode(i));
    };
    
  };
  printAtoZ();
  
  console.log('===============')
  
  // Tinh tong cac phan tu trong mang
  function sumOfArray(){
    var arr = [1,2,3,4,5,6];
    var i,sum = 0, l = arr.length;
    for(i = 0; i < l; i++){
      sum = sum + arr[i];  
    };
    console.log(sum);
  };
  sumOfArray();
   
  console.log('===============')
  
  // Tinh tong cua tich cac phan tu trong 2 array
  function nameIsSoLongSoIDontGiveItAName(){
    var arrA = [1,2,3,4,5], arrB = [6,7,8,9];
    var mulA = 1, mulB = 1, lengthA = arrA.length, lengthB = arrB.length;
    for(var i = 0; i < lengthA; i++ ){
      mulA *= arrA[i]; 
    };
    for(var i = 0; i < lengthB; i++ ){
      mulB *= arrB[i];
    };
    console.log(mulA + mulB);
  };
  nameIsSoLongSoIDontGiveItAName();
  
  console.log('===============')
  
  // Kiem tra so nguyen to
  function primeNumber(x){
      var checker = 0;
      for (var i = 2; i < x; i++){if (x % i !== 0){checker += 1}};
      
      if (checker !== 0){console.log(x,' la so nguyen to')}
      else{console.log(x, ' khong la so nguyen to')}
      };
  ;
  primeNumber(7);
  
  
  