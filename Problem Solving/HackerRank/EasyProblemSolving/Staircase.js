function staircase(n) {
    
    for(let i = 1; i<= n; i++) {
        let willBePrintedArr = []
        willBePrintedArr.length = n - i
        willBePrintedArr.fill(' ')
        let filledBySharpArr = []
        filledBySharpArr.length = i
        filledBySharpArr.fill('#')
        willBePrintedArr.concat(filledBySharpArr)
        console.log(willBePrintedArr.concat(filledBySharpArr).join().replace(/,/g, ''))
    }

}