
// ở cái consumer có onClick
// phải gọi onClick return ra addToCart là vì mặc định nếu gọi như này
onClick={context.addToCart(product)}
// thì cái hàm onClick nó sẽ chạy liên tục
// nên phải cho nó return ra cái function để tránh tình trạng này
onClick={() => context.addToCart(product)}