db.execute(
    // để ???? là để tránh SQL injection
    'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
    [this.title, this.price, this.imageUrl, this.description]
)