function appendAndDelete(s, t, k) {
    if(s === t && k % 2 === 0) {
        return 'Yes'
    }
    if(s.indexOf(t) !== -1 && s.length > t.length) {
        if(k >= s.length - t.length) {
            return 'Yes'
        } else {
            return 'No'
        }
    }
    if(t.indexOf(s) !== -1 && (t.length - s.length) % 2 === 0) {
        if(k >= t.length - s.length) {
            return 'Yes'
        } else {
            return 'No'
        }
    }
    if(t[0] !== s[0] && (s.length + t.length) <= k) {
        return 'Yes'
    }
    if(s == t && k >= s.length * 2) {
        return 'Yes'
    }
    let theFirstDiffElementIndex = 0
    let numberLeftElementsOfS
    let numberLeftElementsOfT
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t[i]) {
            theFirstDiffElementIndex++
        } else {
            numberLeftElementsOfS = s.length - i
            console.log(numberLeftElementsOfS)
            numberLeftElementsOfT = t.length - i
            console.log(numberLeftElementsOfT)
            break
        }
    }
    if(k == (numberLeftElementsOfS + numberLeftElementsOfT)) {
        return('Yes')
    } else {
        return('No')
    }
}