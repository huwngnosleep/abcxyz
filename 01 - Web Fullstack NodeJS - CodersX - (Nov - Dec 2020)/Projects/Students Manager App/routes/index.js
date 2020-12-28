

const multer = require('multer');
const upload = multer({ dest: "./public/uploads/" });

const usersController = require('../controllers/users.controller');
const usersMiddleware = require('../middlewares/users.middleware');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');
const signupController = require('../controllers/signup.controller');
const signupMiddleware = require('../middlewares/signup.middleware');

function route(app) {
    // users
    app.get('/users', loginMiddleware.requireLogin, usersController.getUsers);
    app.get('/users/search', loginMiddleware.requireLogin, usersController.searchUser);
    app.get('/users/:id', loginMiddleware.requireLogin, usersController.viewUser);
    app.get('/new', loginMiddleware.requireLogin, (req, res) => res.render('./users/new'));
    app.post('/users/new',
        loginMiddleware.requireLogin,
        upload.single('avatar'),
        usersMiddleware.validateInput,
        usersController.addUser);
    
    // login
    app.get('/login', loginController.index);
    app.post('/login', loginMiddleware.validateInput, loginController.postLogin);
    app.get('/signup', signupController.signUp);
    app.post('/signup', signupMiddleware.validateInput, signupController.postSignup);

    app.get('/', loginMiddleware.requireLogin, (req, res) => res.render('index'));
}

module.exports = route;
