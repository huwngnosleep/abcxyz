var minRemoveToMakeValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            stack.push(s[i])
        } else if(s[i] == ')') {
            if(stack.length > 0) {
                stack.pop()
            } else {
                s = s.slice(0, i) + s.slice(i + 1)
                i--
            }
        }
    }
    
    if(stack.length > 0) {
        let counter = stack.length
        for(let i = s.length - 1; i >= 0; i--) {
            if(s[i] == '(' && counter > 0) {
                s = s.slice(0, i) + s.slice(i + 1)
                counter--
                i++
            } 
            if(counter == 0) {
                return s
            }
        }
    }
    r
    return s
};