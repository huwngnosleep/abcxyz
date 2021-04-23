function doSomething(a, b) {
    for(let i in a) { // O(a)
        console.log(i)
    }
    for(let i in b) { // O(b)
        console.log(i)
    }
} // O(a + b)