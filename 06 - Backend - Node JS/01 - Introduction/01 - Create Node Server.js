// bản chất của việc tạo server là dùng package http
// server luôn nhận vào một function chứa hai tham số
// là request và response
// sử dụng method listen để listen tới các thay đổi

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000)