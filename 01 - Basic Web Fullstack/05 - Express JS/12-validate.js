var errors = [];
        if(!req.body.name) {
            errors.push('Name is required!')
        }
        if(!req.body.id) {
            errors.push('Id is required!')
        }
        if(errors.length) {
            res.render('users/new', { 
                // truyền vào object như thế này có nghĩa là khai báo object tồn tại trong cái trang đấy kể từ lúc render ra
                // biến có thể được sử dụng trong pug
                errors,
                input: req.body,
            })
            return;
        }
// pug code
    // input(type="text" name="name" placeholder="Enter student name" value=input ? input.name : "") 
    // input(type="text" name="id" placeholder="Enter student ID" value=input ? input.id : "")
    // phải dùng cái ternary operator kia là vì khi get ở route để render trang về 
    // sẽ không có cái req.body nào hết nên nếu dùng value=input.name sẽ lỗi undefined