// Get Extension
var path = require('path');
function getExtension(fileName){
    console.log(path.extname(fileName));
};
getExtension("data.txt");