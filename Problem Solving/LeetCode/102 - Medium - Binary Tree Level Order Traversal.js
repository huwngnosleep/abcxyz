var levelOrder = function(root) {
    if(!root) {
        return []
    }
    const queue = [root]
    const result = []
    
    while(queue.length) {
        let length = queue.length, popCount = 0
        const currentLevel = []
        while(popCount < length) {
            const currentNode = queue.shift()
            popCount++
            currentLevel.push(currentNode.val)
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        
        result.push(currentLevel)
    }
    
    return result
};