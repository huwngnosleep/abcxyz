postLogin = function(req, res) {
    let account = req.body.account;
    let password = req.body.password;
    let admin = db.get('admins').find({account}).value();
    // .find({account}): thay vì truyền callback vào find method như bình thường
    // ta có thể truyền một cái object dạng: {account: account}
    if(!admin) {
        res.render('./login', {
            errors: [
                'account does not exist'
            ]
        });
        return;
    };
    if(admin.password != password) {
        res.render('./login', {
            errors: [
                'wrong password'
            ]
        });
        return;
    };
    res.redirect('/users')
}