// method create của sequelize sẽ tạo một object tương ứng với data truyển vào
// rồi sau đó lập tức sẽ ghi vào database
// create là promise
Product.create({
    title,
    price,
    imageUrl,
    description,
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

// query all the data
Product.findAll()
  .then((products) => {
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    })

  })
  .catch((err) => console.log(err))

// query one data
Product.findAll({where: {id: prodId}})
  .then((products) => {
    // ... 
    // findAll luôn return ra một Array
    const product = product[0]
  })

  // destroy
product.destroy()