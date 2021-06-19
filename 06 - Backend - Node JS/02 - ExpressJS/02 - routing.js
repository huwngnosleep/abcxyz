const express = require('express')

const app = express()

// cái tên route không chỉ mang nghĩa là vào cái route đấy
// mà còn có nghĩa là tất cả các cái route sau nó nữa
app.use('/add-product', (req, res, next) => {
    console.log('middle ware 1')
    // next()
})

// route '/' mặc định là nhận tất cả route
// nên phải để nó xuống dưới cùng
app.use('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)
