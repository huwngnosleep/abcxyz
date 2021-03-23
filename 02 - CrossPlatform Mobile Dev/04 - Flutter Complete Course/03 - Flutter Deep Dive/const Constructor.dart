// có thể thêm const vào trước một cái constructor như sau
Container(
  child: const Container(
))
// chỉ dùng cho các constructor có argument là static
// để cho Flutter biết là tuy component ngoài cần rebuild nhưng phần con đấy thì không cần
// và sẽ chỉ rebuild component ngoài thôi