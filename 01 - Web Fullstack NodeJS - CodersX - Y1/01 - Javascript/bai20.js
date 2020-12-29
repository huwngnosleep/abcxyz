// Dem so luot vote
var voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age:55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}];

function totalVotes(){
    var a = voters.filter(function(x){
        return x.voted == true
    });
    console.log(a.length);
};
totalVotes();

console.log('===========');

// Tinh tong gia tien san pham
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }];
function totalMoney(){
  var sum = wishlist.reduce(function(total, nextMoney){
      return total + nextMoney.price 
  }, 0);
  console.log(sum);
};
totalMoney();

console.log('===========');

// Tra ve mang chua ten cac san pham
function arrayTitle(){
  var title = wishlist.map(function(product){
    return product.title;
  });
  console.log(title);
};
arrayTitle();