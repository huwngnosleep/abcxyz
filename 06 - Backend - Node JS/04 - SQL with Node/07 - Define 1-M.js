Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)

// sau khi tạo relation sẽ tự có method sau
User.createProduct({
    // ... data
})

// tương đương với 
Product.create({
    // ... data
    // userId : ...
})