// Binh phuong cac so chan trong mang
function powerUp(){
    var arr = [0, 3, 6, 7, 4];
    var l = arr.length;
    for ( var i = 0; i < l; i++){
      if (arr[i] % 2 == 0){arr[i] *= arr[i]};
    };
    console.log(arr);
  };
  powerUp();
  
  // Tinh diem trung binh 3 mon
  function average(){
    var marks = [8, 8, 8.5];
    var averageMark = marks.reduce(function(unit1, unit2){
      return (unit1 + unit2)/2
    }, );
    console.log(averageMark);
    console.log(Math.round(averageMark));
  };
  average();
  
  // Chuyen cac so am thanh so duong
  function contrastNumber(){
    var arr = [46, -17, 32, 42, 9, -34, -30, -34, -48, 17];
    var l = arr.length;
    for (var i = 0; i < l; i++ ){arr[i] = -arr[i]};
    console.log(arr);
  };
  contrastNumber();
  
  // Ham random sinh ra mot so ngau nhien tu 1 - 100
  function randomNumber (){
    console.log(Math.round(Math.random()*100));
  };
  randomNumber();