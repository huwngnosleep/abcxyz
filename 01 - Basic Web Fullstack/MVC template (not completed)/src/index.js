const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const { get } = require('http')
const app = express()
const port = 500
const route = require('./routes')

// mongo db connect
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/f8_education_dev', function (err, client) {
  if (err) throw err

  var db = client.db('f8_education_dev')

})



// đọc file ảnh
app.use(express.static(path.join(__dirname,'public'))) 
// middleware xử lí post method từ thư viện body parser
app.use(express.urlencoded(
  {extended: true}
));
app.use(express.json());

// template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.method(path, handler)
// khi người dùng nhập vào thanh url một cái link
// nếu match đúng cái folder mình đã set thì function handler sẽ được gọi
// match cái nào thì chạy cái function đó

route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})