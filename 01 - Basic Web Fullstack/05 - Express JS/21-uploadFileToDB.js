// require thư viện 
// npm install multer
const multer = require('multer');

// chọn folder để upload vào
const upload = multer({ dest: "./public/uploads/" });

app.post('/users/new',
loginMiddleware.requireLogin,
usersMiddleware.validateInput,
upload.single('avatar'),
usersController.addUser);

addUser = function(req, res) { 
    // thêm cái gạch chéo ở đầu để cho img(src= user.avatar) đọc được
    req.body.avatar = '/' + req.file.path.split('\\').slice(1).join('/');
    db.get('users').push(req.body).write();
    res.redirect('/users');
}

