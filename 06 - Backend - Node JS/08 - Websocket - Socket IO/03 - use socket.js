// server
io.getIO().emit('posts', {action: 'create', post: post})

// client
const socket = openSocket('url')
socket.on('posts', (data) => {
    if(data.action === create) {
        // ...
    }
})