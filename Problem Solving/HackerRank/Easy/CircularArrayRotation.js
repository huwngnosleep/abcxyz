function circularArrayRotation(arr, k, queries) {
    let x = k % arr.length;
    let l = arr.length;
    let newArr = arr.splice(l - x, x);
    arr.length = l - x;
    let result = newArr.concat(arr);
    result = queries.map(i => result[i]);
    return result
}