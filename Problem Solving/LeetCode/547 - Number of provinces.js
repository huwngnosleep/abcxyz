/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {

    let result = 0
    for(let row = 0; row < isConnected.length; row++) {
        for(let col = 0; col < isConnected.length; col++) {
            if(isConnected[row][col] !== 0) {
                traverse(row, col)
                result++
            }
        }
    }
    
    return result
    
    
    function traverse(row, col) {
        const queue = []
        
        for(let i = 0; i < isConnected.length; i++) {
            if(isConnected[row][i] === 1) {
                queue.push([row, i])
                isConnected[row][i] = 0
            }
        }
        
        for(let i = 0; i < isConnected.length; i++) {
            if(isConnected[i][col] === 1) {
                queue.push([i, col])
                isConnected[i][col] = 0
            }
        }
        
        while(queue.length) {
            const current = queue.shift()
            traverse(current[0], current[1], result + 1)
        }
        
    }
};