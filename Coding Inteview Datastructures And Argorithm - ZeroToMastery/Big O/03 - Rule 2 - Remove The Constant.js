function doSomething(array) {
    for(const i in array) { // O(n)
        console.log(i)
    }
    for(const i in array) { // O(n)
        console.log(i)
    }
} // O(2n)
// with many n the complexity of this function is just linear
// so we can call it O(n)