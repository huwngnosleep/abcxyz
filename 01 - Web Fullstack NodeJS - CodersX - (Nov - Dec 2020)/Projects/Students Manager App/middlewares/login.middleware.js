const db = require('../db');

module.exports = {
    validateInput: function(req, res, next) {
        var errors = [];
        if(!req.body.account) {
            errors.push('Account is required!')
        }
        if(!req.body.password) {
            errors.push('Password is required!')
        }
        if(errors.length) {
            res.render('./login', {
                errors,
                input: req.body,
            });
            return;
        }
        next();
    },
    requireLogin: function(req, res, next) {
        let account = req.signedCookies.account;
        if(!account) {
            res.redirect('/login');
            return;
        }
        let admin = db.get('admins').find({account});
        if(!admin) {
            res.redirect('/login');
            return;
        }
        // biến locals chỉ tồn tại trong vòng đời của một cái get hoặc post (từ request đến respond)
        res.locals.account = account;
    
        next();
    }
}