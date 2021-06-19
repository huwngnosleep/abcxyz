if(url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'DUMMY')
    res.statusCode = 302
    // sử dụng header để redirect người dùng
    res.setHeader('Location', '/')
    return res.end()
}