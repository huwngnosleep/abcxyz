// shallow-clone
let obj1 = {
    a: 1, 
    b: 2,
    c: 3,
}

let obj2 = {}
for(let key in obj1) {
    obj2[key] = obj1[key]
}
console.log(obj2)

// shallow-clone with spread 
let obj3 = {
    ...obj1,
}
console.log(obj3)

// tuy nhiên khi obj1 chứa key có tham chiếu đến cái gì đó thì sẽ có vấn đề
const obj4 = {
    a: 1, 
    b: 2,
    c: 3,
    d: { e: 5},
}
let obj5 = {
    ...obj4,
}
obj5.a = 2
console.log(obj4)
console.log(obj5)

// nên phải dùng kĩ thuật deep-clone
function clone(item) {
    if (!item) { return item; } // null, undefined values check

    var types = [ Number, String, Boolean ], 
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function(type) {
        if (item instanceof type) {
            result = type( item );
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = clone( child );
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode( true );    
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = clone( item[i] );
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
}