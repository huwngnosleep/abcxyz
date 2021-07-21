const jwt = require('jsonwebtoken')

const token = jwt.sign({
    email: loadedUser.email,
    userId: loadedUser._id.toString(),
}, 'superrrrrrrsecrettttkey',
    { expiresIn: '1h' }

)