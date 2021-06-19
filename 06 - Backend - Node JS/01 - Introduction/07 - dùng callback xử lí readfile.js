
// bản chất cái mở file trong hàm fetchall là bất đồng bộ
// nên có gọi hàm fetchAll trong controller cũng không lấy được data
static fetchAll(callback) {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'products.json',
    )
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([])
        }
        callback(JSON.parse(fileContent))
    })
}

// nên mới có kĩ thuật truyền vào callback
Product.fetchAll((products) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
})
