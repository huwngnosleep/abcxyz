Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)