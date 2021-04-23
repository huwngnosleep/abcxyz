// Given 2 arrays, create a function that let users know (true or false)
// whether these two arrays contain any common item
// example
// const array1 = ['a', 'b', 'c', 'd']
// const array2 = ['z', 'y', 'i']
// => return false

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// => return true

// --------------------

// input: 2 parameters - arrays - no size limit
// output: true or false

// brute force: use 2 nested array and compare each element O(a * b)

// array1 => object{
//     a: true,
//     b: true,
//     ...
// }
// array2[index] === object.properties


const array1 = ['a', 'b', 'c', 'd']
const array2 = ['z', 'y', 'c']

const containCommonItem = (arr1, arr2) => {
    // loop through arr1 to create object
    let map = {}
    for(let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true
        }
    }

    // loop through arr2 and check
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true
        }
    }
    return false
    // always think about what will break your code
}

console.log(containCommonItem(array1, array2))