/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
var request = require('request')
 
function load(link) {
    return new Promise(function(resolve, reject) {
        request(link, function(err, data) {
          if (err) {reject(err)}
          else {resolve(data)}
        })
    })
  };
Promise.all([
    load('https://jsonplaceholder.typicode.com/todos/1'),
    load('https://jsonplaceholder.typicode.com/todos/2'),
    load('https://jsonplaceholder.typicode.com/todos/3')
])
    .then(function(data){for(var i = 0, l = data.length; i < l; i++)
        {console.log(data[i].body)}
    })