var rightSideView = function(root) {
    let levels = []
    dfs(root, levels)
    const res = [];
    for(let l of levels){
        res.push(l.pop())
    }
    return res
};

function dfs(root, allLevels, levelCount = 0) {
    if(!root) return
    if(!allLevels[levelCount]) {
        allLevels[levelCount] = []
    }
    allLevels[levelCount].push(root.val)
    if(root.left) {
        dfs(root.left, allLevels, levelCount + 1)
    }
    if(root.right) {
        dfs(root.right, allLevels, levelCount + 1)
    }
    
}