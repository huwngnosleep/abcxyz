
// res.redirect sẽ chuyển client về path nào đấy sau khi thực hiện xong method (get, post) được khai báo
app.post('/users/create', function(req, res) {
    users.push(req.body);
    res.redirect('/user');
}) 
// để post được cần phải có cái form với method là post
// sau khi submit form xong thì mới thực hiện các câu lệnh khai báo trong cái post method trên