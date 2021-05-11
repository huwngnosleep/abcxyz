// một function mà nhận function khác làm parameter
// hay return ra một function khác thì gọi là higer order function
const waitAndRun = (ms, func) => setTimeout(func, ms)
const run = () => console.log('Run')
waitAndRun(2000, run)

// phải dùng run chứ không phải run() là vì khi run() máy sẽ chạy luôn dòng 4
// ở đây chỉ cần cho cái hàm run vào làm tham số thôi, đến lúc gọi mới được chạy