// route
// thế này mặc định là sẽ nhận tất cả những cái route có kiểu đấy
router.get('/products/:productId', controller)

// controller
(req, res, next) => {
    const prodId = req.params.productId
}