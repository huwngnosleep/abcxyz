//
var fs = require("fs");
var str = fs.readFileSync('./data.json.txt', {encoding:'utf8'});

var hungDz = JSON.parse(str);
console.log(hungDz.name);

var members = [
    {name : 'Hung', age : 18},
];
var l = members.length;
  for (var i = 0; i < l; i++){
    var arr = JSON.stringify(members[i]);
    fs.writeFileSync('./data.json.txt', arr)
    };

console.log('=========');

var obj = { name: "CodersX", age: 1 };
obj = JSON.stringify(obj);
console.log(obj);