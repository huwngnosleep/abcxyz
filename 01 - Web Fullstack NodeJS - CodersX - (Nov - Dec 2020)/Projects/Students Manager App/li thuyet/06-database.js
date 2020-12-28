app.get('/users', function(req, res) { 
    res.render('./users',{ // vẫn là render ra cái trang, nhưng users là lấy từ database
        users: db.get('users').value() // db.get('users') là một cái object. khi thêm .value() thì là lấy vào cái array
    });
})


app.post('/users/new', function(req, res) { 
    db.get('users').push(req.body).write(); // db.get('users') là một cái array, nên có thể push thêm giá trị mới
    res.redirect('/users');
})
  