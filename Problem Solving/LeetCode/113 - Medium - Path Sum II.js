/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = []
    if(!root) return [] // validate input
    
    traverse(root, [], targetSum)
    
    return result
    
    function traverse(currentNode, currentPath = [], targetSum) {
        currentPath.push(currentNode.val)
        
        // calculate result
        if(!currentNode.right && !currentNode.left && currentNode.val == targetSum) {
            result.push(currentPath.slice())
        }
        
        // try left sub tree
        if(currentNode.left) {
            traverse(currentNode.left, currentPath, targetSum - currentNode.val)
        }
        
        // try right sub tree
        if(currentNode.right) {
            traverse(currentNode.right, currentPath, targetSum - currentNode.val)
        }
        
        currentPath.pop() // backtracking
    }
};