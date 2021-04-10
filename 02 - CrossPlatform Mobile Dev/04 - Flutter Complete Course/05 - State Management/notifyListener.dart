void addProduct(item) {
  _items.add(item);
  // gọi notifyListener để cho tất cả các widget lấy state này đều phải render lại
  // để lấy data mới nhất
  notifyListener();
}

// dùng như này khi không muốn widget rebuild khi Provider nhận thay đổi
Provider.of<Products>(context, listen: false,)