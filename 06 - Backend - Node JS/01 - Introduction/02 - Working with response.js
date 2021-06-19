const server = http.createServer((req, res) => {
    // trước khi có expressjs và template engine thì chúng ta phải làm thế này
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('</html>')
    res.end()
})