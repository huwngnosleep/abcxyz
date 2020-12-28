const express = require('routes/node_modules/express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// login form

router.use('/login', siteController.login);

module.exports = router;