module.exports = {
    signUp: function(req, res) { 
        res.render('./signup');
    },
    postSignup: function(req, res) {
        db.get('admins').push(req.body).write();
        res.redirect('/');
    }
}