// bình thường các file trong project người dùng không thể access vào được
// nhưng với những file muốn public để trả về client thì sử dụng method static của express

app.use(express.static(path.join(__dirname, 'public')))
// thì lúc này tất cả những file html, css trong public
// đều có thể link bằng đường dẫn tuyệt đối rồi trả về client