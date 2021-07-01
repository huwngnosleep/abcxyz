// mongodb không lưu id dưới dạng json như bình thường
// mà sử dụng dạng bson (nhị phân) để giúp query dữ liệu nhanh hơn
// nên nếu pass id là string vào để find thì sẽ không được
// mà phải dụng constructor tạo ObjectId để query

static findById(prodId) {
    const db = getDb()
    return db.collection('products')
    .find({_id: new mongodb.ObjectId(prodId)})
    .next()
    .then()
    .catch()
}