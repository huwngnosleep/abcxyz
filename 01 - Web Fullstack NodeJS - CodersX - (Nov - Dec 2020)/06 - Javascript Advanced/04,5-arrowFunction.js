// khi có các function con ở trong một function
// thì các function con không được kế thừa context của function cha
// nên nếu dùng this thì this sẽ là global context
// để dùng được this thì phải bind cho cái function con một context

// còn arrow function sẽ tự kế thừa context ở ngoài. nên không cần phải bind


var a = {
    name: 'AAA',
    run: function() {
        function x() {
            console.log(this.name)
        }
        x.bind(a)(); // Noted
    }
}


var a = {
    name: 'AAA',
    run: function() {
        var x = () => console.log(this.name) // ở đây this được hiểu như this của run chứ không phải là this của x
        x();
    }
}
a.run()