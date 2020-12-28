
class UsersController {

    // [GET] /users
    index(req, res) {
        res.render('users');
    }
    
} 

module.exports = new UsersController;
