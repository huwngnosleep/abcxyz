// we also use BIG O to notate the space complexity of function
function boooo(arr) => {
    // we only declare 1 variable
    for(let i = 0; i < arr.length; i++) {
        console.log('booooo!')
    }
} // so this is O(1)

boooo([1, 2, 3, 4, 5])

function arrOfNTimes(n) {
    // declared 1 array, but this declaration can be ignored
    let hiArr = []
    // and each time loop add new element to that array
    for(let i = 0; i < n; i++) {
        hiArr[i] = 'hi'
    }
    return hiArr
} // this is O(n)

arrOfNTimes(6)