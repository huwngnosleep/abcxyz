class Foo {
    static staticMethod() {  // static method
        console.log('static method');
    }
    instanceMethod() {  // instance method
        console.log('instance method');
    }
}

// static method chỉ có thể được gọi từ chính class, không thể gọi từ instance
// bản thân class lại không thể gọi được instance method
const bar = new Foo // instance

// Foo.instanceMethod() ---> error
// bar.staticMethod() ---> error
Foo.staticMethod();
bar.instanceMethod();

