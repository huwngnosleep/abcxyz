// trong util tạo database.js

const mysql = require('mysql2')

// create pool thay vì create connection 
// vì mỗi connection sẽ lại phải khởi tạo lại
// như vậy sẽ ảnh hưởng performance
// mà thay vào đó sẽ tạo pool, cứ query thì ném vào đấy
// pool connection sẽ tự shutdown khi app shutdown
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_app',
    password: 'Sq8210$$$$',

})

module.exports = pool.promise()

// app.js
const db = require('./util/database')
db.execute('SELECT * from PRODUCTS')