// sử dụng method Route của express
// các middleware trong Route cũng dùng như một cái express app nhỏ
// route.js
const router = express.Router()

router.use(...)

router.get(...)

module.exports = router

// app.js
const router = require('./router')

app.use(router)
