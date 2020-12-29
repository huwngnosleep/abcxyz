
class SiteController {

    // [GET] /login
    login(req, res) {
        res.render('login');
    }
    
} 

module.exports = new SiteController;
