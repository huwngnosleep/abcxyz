var isValid = function(s) {
    let stack = []

    const parens = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
        
    for(const i of s) {
        if(parens[i]) {
            stack.push(i)
        } else {
            if(parens[stack.pop()] != i) {
                return false
            }
        }
    }
    
    if(stack.length > 0) {
        return false
    }
        
    return true
};