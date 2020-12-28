
module.exports = {
    validateInput: function(req, res, next) {
        var errors = [];
        if(!req.body.name) {
            errors.push('Name is required!')
        }
        if(!req.body.id) {
            errors.push('Id is required!')
        }
        if(errors.length) {
            res.render('users/new', {
                errors,
                input: req.body,
            });
            return;
        }
        next();
    }
}