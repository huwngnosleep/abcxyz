const express = require('express')
const app = express()
const path = require('path')
const { get } = require('http')
const port = 5000
const route = require('./routes')


const db = require('./db')

// read static file
app.use(express.static('public')); 

// middleware xử lí post method từ thư viện body parser
app.use(express.urlencoded(
  {extended: true}
));
app.use(express.json());

// template engine
app.set('view engine', 'pug');
app.set('views', './views');

// cookie parser
const cookieParser = require('cookie-parser');
// signed cookie
app.use(cookieParser('awodj2312321uajdh2'));


route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})