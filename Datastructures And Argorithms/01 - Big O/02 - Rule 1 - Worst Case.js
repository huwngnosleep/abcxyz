// when calculating BIG O, we just care about the worst case

// example:
const array = [1, 2, 3, 'nemo', 5, 6, 7, 8, 9, 10]

// to find nemo, we need 4 operation

// but in the worst case:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'nemo']
// the function need to run 10 times

// so O(n)