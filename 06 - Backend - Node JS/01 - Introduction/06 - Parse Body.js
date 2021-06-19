if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1]
        fs.writeFileSync('message.text', message)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
}