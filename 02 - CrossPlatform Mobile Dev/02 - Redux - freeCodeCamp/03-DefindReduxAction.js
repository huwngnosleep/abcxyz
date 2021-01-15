// không nên viết action có chứa string như thế này

let action = {
    type: 'LOGIN'
}

// mà nên dùng constance để khó bị bug hơn
const LOG_IN = 'LOG_IN'

action = {
    type = LOG_IN
}

const actionCreator = (action) => {
    return action
}