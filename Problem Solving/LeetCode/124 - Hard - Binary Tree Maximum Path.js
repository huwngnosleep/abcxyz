/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity
    
    traverse(root)
    
    return maxSum
    
    function traverse(node) {
        if(!node) return 0
        
        const leftMax = Math.max(traverse(node.left), 0)
        const rightMax = Math.max(traverse(node.right), 0)
        
        const currentNodeSum = leftMax + rightMax + node.val
        maxSum = Math.max(maxSum, currentNodeSum)
        return Math.max(leftMax, rightMax) + node.val
    }
};