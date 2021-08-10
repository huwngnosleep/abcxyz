// new middleware
module.exports = (req, res, next) {
    // Bearer token
    const token = req.get('Authorization').split(' ')[1]
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'supersupersecret')
    } catch (error) {
        error.statusCode = 500
        throw err
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated')
        error.statusCode = 401
        throw err
    }
    req.userId = decodedToken.userId
    next()
}

router.get('/...', isAuth, ...)