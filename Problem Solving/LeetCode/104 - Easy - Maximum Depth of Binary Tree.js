var maxDepth = function(node, currentDepth = 0) {
    if(!node) {
        return currentDepth
    } else {
        currentDepth++
        return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth))
    }
};