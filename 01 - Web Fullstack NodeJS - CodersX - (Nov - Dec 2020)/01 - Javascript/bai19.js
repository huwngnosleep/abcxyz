// Tim so chan trong mang
function findFirstEvenNumber(array){
    var a = array.find(function(x){
      return x % 2 == 0;
      
    });
    console.log(a);
}
findFirstEvenNumber([1, 2, 3, 4, 5]);

console.log('========');

// Tim so chia het cho x
function findDivisibleNum(array, isDevided){
    var a = array.find(function(x){
      return x % isDevided == 0
    })
    console.log(a);
};
findDivisibleNum([4, 5, 6, 7, 8, 9], 3);


