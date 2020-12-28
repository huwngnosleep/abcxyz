const { Router } = require("express");

function middleware1(req, res, next) {
    console.log('MD1');
    next();
}

function middleware2(req, res, next) {
    console.log('MD2');
    next();
}

Router.get('/...', middleware1, middleware2)

// khi thực hiện get method sẽ lần lượt chạy các middleware theo thứ tự
// tuy nhiên nếu không có next() thì sẽ không chạy middleware tiếp theo