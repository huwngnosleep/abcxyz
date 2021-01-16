const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/SearchController');

// viết / không có nghĩa là mặc định khi vào /search là sẽ vào trang này đầu tiên:
router.use('/', searchController.index);

module.exports = router;