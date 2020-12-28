const request = require('request');
console.time('Time this');
console.log(request('https://randomuser.me/api/'));
console.timeEnd('Time this');
