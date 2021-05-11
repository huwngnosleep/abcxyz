// dynamic routing: dùng dấu : để biếu thị là cái đằng sau sẽ là giá trị bất kì chưa biết
// cứ đúng dạng /users/... thì sẽ chạy vào route này
// gọi là route params
app.get('/users/:id', function (req, res) { 
    let id = Number(req.params.id); 
    // các params của route sẽ nằm trong object params 
    // nên phải gọi .id để lấy value
    let user = db.get('users').find({ id }).value(); // find method của lowdb
    res.render('./users/view', {
      user: user
    });
  })
  