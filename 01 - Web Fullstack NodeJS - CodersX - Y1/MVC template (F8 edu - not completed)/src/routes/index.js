const searchRouter = require('./search');
const siteRouter = require('./site');
const usersRouter = require('./users');


function route(app) {

    // action ---> dispatcher ---> handler
    // dispatcher kiểm tra xem đã đúng chưa, đúng thì gọi function handler 
    app.get('/', (req, res) => {
        res.render('home')
    })
    // res là trả về cái gì
    // res.render sẽ trả về status code đầu 200 và html chứa trong file
    // req có tác dụng tùy chỉnh những cái được trả về qua response
    
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // }); ===
    app.use('/search', searchRouter );

    // khi gọi app.get có nghĩa là đang tạo ra một route với method là get
    
    // app.get('/form', (req, res) => {
    //     console.log(req.query) // lấy dữ liệu từ method get thì dùng .query
    //     // console.log(req.body) lấy dữ liệu từ method post thì dùng .body
    //     res.render('form');
    // });

    app.use('/users', usersRouter );
    app.use('/', siteRouter );
    
    
}

module.exports = route;
