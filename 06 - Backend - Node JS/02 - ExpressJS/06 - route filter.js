app.use('/router1', router1)
app.use('/router2', router2)

// trong router 1
// thay vì viết 
app.use('/router1/path1')

// thì sẽ chỉ cần viết
app.use('/path1')