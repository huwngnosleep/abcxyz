const isPalindrome = function(s) {
    var left = 0
    var right = s.length - 1
    while(left < right) {
      if(s[left] != s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
  
  const almostPalindrome = function(s) {
      var left = 0
      var right = s.length - 1
      while(left < right) {
        if(s[left] != s[right]) {
          if(isPalindrome(s.slice(0, left) + s.slice(left + 1)) == true
            ||
            isPalindrome(s.slice(0, right) + s.slice(right + 1)) == true
          ) {
            return true
          } else {
            return false
          }
        }
        left++
        right--
      }
  
      return true
  }
  
  console.log(almostPalindrome('raceacar'))