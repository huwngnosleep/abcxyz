// để trả về html cho người dùng, dùng method sendFile của express

router.get('/', (req, res, next) => {
    // path trong sendFile luôn phải là đường dẫn tuyệt đối
    // nhưng vì node cài global nên / nó sẽ hiểu là folder root trong máy 
    // thay vì folder project
    res.sendFile('/views/shop.html')
})

// do đó chúng ta sử dụng package path để giải quyết vấn đề này
const path = require('path')

res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))