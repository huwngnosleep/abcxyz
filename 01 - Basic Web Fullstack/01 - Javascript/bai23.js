function sortArray(){
    var array = [5, 7, 1, 3, 2];
    // Sap xep array theo thu tu tang dan
    var newArr = array.sort(function(a, b){
      return a - b;
    });
    console.log(newArr);
    
    // Sap xep array theo thu tu giam dan
    var newArr = array.sort(function(a, b){
      return b - a;
    });
    console.log(newArr);
    };
    sortArray();
    // Sap xep cac chuoi tu nho den lon
    function arrangeArray(){
        var stringsArray = ["dog", "wolf", "by", "family", "eaten"];
        var newArr = stringsArray.sort(function(x, y){
            return x.length - y.length
        });
        console.log(newArr);
        };
    arrangeArray();
    
    // Sap xep phan tu trong mang theo thuoc tinh age tu nho den lon
    function sortAge(){
        var arr = [
            { name: "Quiet Samurai", age:22 },
            { name: "Arrogant Ambassador", age: 100},
            { name: "Misunderstood Observer", age: 50},
            { name: "Unlucky Swami",  age: 77 }];
        var newArr = arr.sort(function(x, y){
            return x.age - y.age;
        });
        console.log(newArr);
    };
    sortAge();
    
    // Sap xep cac phan tu theo bang chu cai
    function alphabeticalArrangement(){
      var alphabetical = ["dog", "wolf", "by", "family", "eaten"];
      var newArr = alphabetical.sort();
      console.log(alphabetical);
    };
    alphabeticalArrangement();