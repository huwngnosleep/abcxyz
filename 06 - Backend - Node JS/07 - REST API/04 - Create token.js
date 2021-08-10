exports.login = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser
    User.findOne({
        email
    })
        .then((user) => {
            if (!user) {
                const error = new Error('A user with this email is not found')
                res.status(404).json({
                    message: error.message
                })
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)


        })
        .then((isEqual) => {
            if (!isEqual) {
                error.statusCode = 401
                throw error
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString(),
                }, 'awfawfawfawgawgawg',
                { expiresIn: '1h' })
        })
        .catch((err) => next(err))
}