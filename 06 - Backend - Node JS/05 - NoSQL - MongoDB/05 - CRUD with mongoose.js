// create
exports.postAddProduct = (req, res, next) => {
    const product = new Product({
      title,
      price,
      description,
      imageUrl,
    });
    product
      .save()
      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/admin/products');
      })
      .catch(err => {
        console.log(err);
      });
};

// find
// findById của mongoose chỉ cần truyền vào id, tự nó sẽ tạo ObjectId
product.findById(id...)

// update
product.findById(id...).then(product => {
    product.title = ...
})
return product.save()

// delete
Product.findByIdAndRemove(ProdId)