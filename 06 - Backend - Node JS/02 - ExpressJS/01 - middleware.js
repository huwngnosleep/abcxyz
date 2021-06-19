// Core concept của express là middle ware
const app = express()

// với mỗi cái request, qua hàm use xong là sẽ response luôn
// có nghĩa là cái use tiếp theo sẽ không bao giờ được chạy
// nhưng với next sẽ tự chạy xuống middleware tiếp theo
app.use((req, res, next) => {
    console.log('middle ware 1')
    next()
})

app.use((req, res, next) => {
    console.log('middle ware 2')
    // ...
})