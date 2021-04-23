let counter = 0
function inception() {
    console.log(counter)
    if(counter > 3) {
        return 'done'
    }
    counter++
    // để lấy được cái return 'done' thì phải gọi function bằng return
    return inception()
}