// sử dụng template engine thì phải khai báo với express
// sử dụng method app.set
// app.set sẽ tạo ra những biến global toàn app
// các tham số của app.use xem trên document

// set template engine
app.set('view engine', 'pug')

// set view folder
// mặc định là nhận folder views
app.set('views', 'views')

// pass param
res.render('shop', {products})