// signed cookie
app.use(cookieParser('awodj2312321uajdh2'));
// có thể chuyền một string vào cookieParser để tạo signed cookie

// cookie có thể nhận tham số thứ 3 là một cái object là option của nó (đọc document)
res.cookie('account', account, {
    signed: true
});   

requireLogin = function(req, res, next) {
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