var longestPalindrome = function(s) {
    if(s.length == 0 || s.length == 1) return s
    
    let result = ""
    const dp = {}
    for(let i = 1; i < s.length; i++) {
        for(let j = 0; j < i; j++) {
            let currentSubStr = s.slice(j, i + 1)
 
            let palindrome = isPalindrome(currentSubStr)
            if(palindrome && currentSubStr.length > result.length) {
                result = currentSubStr
            }
            
        }
    }
    if(result.length == 0) return s[0]
    return result
};

function isPalindrome(string) {
    if(string.length == 0 || string.length == 1) return true
    let length = string.length
    for(let i = 0; i < Math.floor(length / 2); i++) {
        if(string[i] != string[length - 1 - i]) {
            return false
        } 
    }

    return true
}