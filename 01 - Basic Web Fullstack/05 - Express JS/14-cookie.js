app.get('/new', function(req, res) {  
        res.render('./users/new');
        res.cookie('key', "value");
        // cookie được gửi từ phía client lên server, server sẽ lưu lại
        // server có thể gửi yêu cầu xóa cookie của client
        // để đọc được cookie từ phía server phải dùng npm install cookie-parser
})