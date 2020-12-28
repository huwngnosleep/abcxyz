
module.exports = {
    getUsers: function(req, res) { 
        let page = Number(req.query.page) || 1;
        let perPage = 20;
        let start = (page - 1) * perPage;
        let end = page * perPage;
        res.render('users',{
            users: db.get('users').value().slice(start, end)
        });
    },
    searchUser: function(req, res) {
        let q = req.query.name;
        var matchedUsers = db.get('users').value().filter(user => {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        res.render('./users',{
            users: matchedUsers
        })
    },
    addUser: function(req, res) { 
        req.body.avatar = '/' + req.file.path.split('\\').slice(1).join('/');
        db.get('users').push(req.body).write();
        res.redirect('/users');
    },
    viewUser: function(req, res) { 
        let id = req.params.id;
        let user = db.get('users').find({ id }).value();
        res.render('./users/view', {
            user: user
        });
    },
}