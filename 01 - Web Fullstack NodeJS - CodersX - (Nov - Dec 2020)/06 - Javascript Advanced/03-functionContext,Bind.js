// bind --- thêm vào context 
// khi khởi tạo biến từ function là method của cái object nào đó
//  thì nó chưa định nghĩa được context (nghĩa là chưa biết this thay thế cho cái nào)

var mouse = {
    name: "Mickey",
    sayHi: function() {
        console.log(this.name);
    }
};

// gọi say bằng method sayHi của mouse nghĩa là nó là một function -> có thể gọi say()
var say = mouse.sayHi.bind(mouse) 
say();