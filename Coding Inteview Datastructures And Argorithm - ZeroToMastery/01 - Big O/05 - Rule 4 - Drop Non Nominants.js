function doSomething(arr) {
    for(let i in arr) {
        console.log(i)
    }
    for(let i in arr) {
        console.log(i) // O(n)
        for(let j in arr) {
            console.log(j) // O(n)
        }
    }
}

// the big o might be O(n + n^2)
// but when it comes to large scale
// n is insignificant to n^2
// so we can drop n and call it O(n^2)