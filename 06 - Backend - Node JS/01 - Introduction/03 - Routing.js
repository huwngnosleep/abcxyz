// Bản chất của việc Routing là sử dụng một đống if
const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/message') {
        res.write('<html>')
        res.write('<head><title>Enter your name</title></head>')
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></input></form></body>')
        res.write('</html>')
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('</html>')
    res.end()
    
})