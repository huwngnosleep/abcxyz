// thay vì dùng một đống hàm để parse body thủ công như cũ
// thì sử dụng package body parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

// other middleware
