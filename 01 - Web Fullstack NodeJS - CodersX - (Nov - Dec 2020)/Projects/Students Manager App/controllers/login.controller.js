const md5 = require('md5');

module.exports = {
    index: function(req, res) { 
        res.render('./login');
    },
    postLogin: function(req, res) {
        let account = req.body.account;
        let password = md5(req.body.password);
        let admin = db.get('admins').find({account}).value();
        if(!admin) {
            res.render('./login', {
                errors: [
                    'account does not exist'
                ],
                input: req.body
            });
            return;
        };
        if(admin.password != password) {
            res.render('./login', {
                errors: [
                    'wrong password'
                ],
            });
            return;
        };

        // cookie có thể nhận tham số thứ 3 là một cái object là option của nó (đọc document)
        res.cookie('account', account, {
            signed: true
        });     
        res.redirect('/users');
    },
    signUp: function(req, res) { 
        res.render('./signup');
    },
    postSignup: function(req, res) {
        db.get('admins').push(req.body).write();
        alert('Sign up completed');
        res.redirect('/');
    }
}
