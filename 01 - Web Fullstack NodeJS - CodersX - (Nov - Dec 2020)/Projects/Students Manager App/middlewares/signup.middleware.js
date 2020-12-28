const db = require('../db');

module.exports = {
    validateInput: function(req, res, next) {
        var errors = [];
        if(!req.body.account) {
            errors.push('Account is required!')
        }
        if(!req.body.password) {
            errors.push('Password is required!')
        }
        if(errors.length) {
            res.render('./signup', {
                errors,
                input: req.body,
            });
            return;
        }
        next();
    },
}