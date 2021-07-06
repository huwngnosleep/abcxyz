const session = require('express-session')
// adding middle ware
app.use(session({
    secret: 'adwafwafawwa',
    resave: false,
    saveUninitialized: false,
}))