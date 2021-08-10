// socket.js
let io

module.exports = {
    init: (httpServer) => {
        io = require('socket.io')(httpServer)
        return io
    },
    getIO: () => {
        if(!io) {
            throw Error
        }
        return io
    }
}

// app.js
const server = app.listen(port)
const io = require('./socket').init(server)