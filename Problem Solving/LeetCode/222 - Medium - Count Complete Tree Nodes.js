 // count nodes of complete binary tree with time less than O(n) -> time must be O(log n)
var countNodes = function(root) {
    if(!root) {
        return 0
    }
    const height = getTreeHeight(root)
    if(height === 0) return 1
    
    const upperCount = Math.pow(2, height) - 1
    let left = 0, right = upperCount
    
    while(left < right) {
        let indexToFind = Math.ceil((left + right) / 2)
        if(nodeExists(indexToFind, height, root)) {
            left = indexToFind
        } else {
            right = indexToFind - 1 
        }
    }
    
    return upperCount + left + 1
    
};


const getTreeHeight = (root) => {
    let height = 0
    while(root.left != null) {
        height++
        root = root.left
    }
    return height
}

const nodeExists = (indexToFind, height, node) => {
    let left = 0, right = Math.pow(2, height) - 1, count = 0
    while(count < height) {
        let midNode = Math.ceil((left + right) / 2)
        if(indexToFind >= midNode) {
            node = node.right
            left = midNode
         } else {
            node = node.left
            right = midNode - 1
         }
        count++
    }
    
    return node != null
}